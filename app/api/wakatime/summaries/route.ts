import { NextResponse } from 'next/server';
import https from 'https';

// Enable caching for this route
export const revalidate = 3600; // Revalidate every hour

interface HttpsOptions {
  method: string;
  headers: Record<string, string>;
  family: number;
}

function httpsRequest(url: string, options: HttpsOptions): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error('Invalid JSON response'));
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });
    
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    
    req.end();
  });
}

export async function GET() {
  try {
    const apiKey = process.env.WAKATIME_API_KEY;
    
    if (!apiKey) {
      console.warn('⚠️  WAKATIME_API_KEY not set');
      return NextResponse.json(
        { error: "Missing WAKATIME_API_KEY" },
        { status: 500 }
      );
    }

    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 6);

    const startDate = sevenDaysAgo.toISOString().split("T")[0];
    const endDate = today.toISOString().split("T")[0];

    const url = `https://wakatime.com/api/v1/users/current/summaries?start=${startDate}&end=${endDate}`;
    console.log('🔄 Fetching WakaTime summaries...');

    const json = await httpsRequest(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
        'User-Agent': 'Next.js/15',
      },
      family: 4, // Force IPv4
    });
    
    interface DayData {
      grand_total: {
        total_seconds: number;
      };
    }
    
    const response = json as { data: DayData[] };

    const dailyHours = response.data.map((day: DayData) =>
      parseFloat((day.grand_total.total_seconds / 3600).toFixed(2))
    );

    console.log('✅ WakaTime summaries fetched successfully');
    
    // Return with cache headers
    return NextResponse.json(dailyHours, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch WakaTime summaries";
    console.error('❌ Failed to fetch WakaTime summaries:', errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import https from 'https';

function httpsRequest(url: string, options: any): Promise<any> {
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
          } catch (e) {
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

    const dailyHours = json.data.map((day: any) =>
      parseFloat((day.grand_total.total_seconds / 3600).toFixed(2))
    );

    console.log('✅ WakaTime summaries fetched successfully');
    return NextResponse.json(dailyHours);
    
  } catch (error: any) {
    console.error('❌ Failed to fetch WakaTime summaries:', error.message);
    return NextResponse.json(
      { error: error.message || "Failed to fetch WakaTime summaries" },
      { status: 500 }
    );
  }
}
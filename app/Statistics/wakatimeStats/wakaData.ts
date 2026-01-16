// lib/wakatime.ts
import https from 'https';

interface HttpsOptions {
  method: string;
  headers: Record<string, string>;
  family: number;
}

interface Project {
  name: string;
  text: string;
}

interface Editor {
  name: string;
}

interface OperatingSystem {
  name: string;
}

interface WakaTimeStatsData {
  projects: Project[];
  editors: Editor[];
  operating_systems: OperatingSystem[];
  human_readable_daily_average: string;
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

export async function getWakaTimeStats(): Promise<WakaTimeStatsData> {
  try {
    const apiKey = process.env.WAKATIME_API_KEY;
    
    if (!apiKey) {
      console.warn('⚠️  WAKATIME_API_KEY not set');
      return { projects: [], editors: [], operating_systems: [], human_readable_daily_average: '0 hrs' };
    }

    const url = "https://wakatime.com/api/v1/users/current/stats/last_7_days";
    console.log('🔄 Fetching WakaTime stats directly...');

    const data = await httpsRequest(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
        'User-Agent': 'Next.js/16',
      },
      family: 4, // Force IPv4
    });
    
    const response = data as { data: WakaTimeStatsData };
    console.log('✅ WakaTime stats fetched successfully');
    
    return response.data;
  } catch (error) {
    console.error('❌ Failed to fetch WakaTime stats:', error);
    return { projects: [], editors: [], operating_systems: [], human_readable_daily_average: '0 hrs' };
  }
}

export async function getWakaTimeDailySummaries() {
  try {
    const apiKey = process.env.WAKATIME_API_KEY;
    
    if (!apiKey) {
      console.warn('⚠️  WAKATIME_API_KEY not set');
      return [0, 0, 0, 0, 0, 0, 0];
    }

    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 6);

    const startDate = sevenDaysAgo.toISOString().split("T")[0];
    const endDate = today.toISOString().split("T")[0];

    const url = `https://wakatime.com/api/v1/users/current/summaries?start=${startDate}&end=${endDate}`;
    console.log('🔄 Fetching WakaTime summaries directly...');

    const json = await httpsRequest(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
        'User-Agent': 'Next.js/16',
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
    return dailyHours;
  } catch (error) {
    console.error('❌ Failed to fetch WakaTime summaries:', error);
    return [0, 0, 0, 0, 0, 0, 0]; // Return 7 days of zeros as fallback
  }
}

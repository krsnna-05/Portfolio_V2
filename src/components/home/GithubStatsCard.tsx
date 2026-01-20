import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GitHubCalendar } from "react-github-calendar";

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface GithubData {
  contributions: Contribution[];
  years: Array<{
    year: number;
    total: number;
    range: {
      start: string;
      end: string;
    };
  }>;
  totalContributions: number;
}

const GithubStatsCard = () => {
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    repos: 0,
    stars: 0,
    followers: 0,
    following: 0,
  });

  useEffect(() => {
    console.log(githubData, loading);
  }, []);

  const fetchGithubStats = async (URL: string) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setGithubData(data);
    } catch (error) {
      console.error("Error fetching GitHub stats:", error);
      setLoading(false);
    }
  };

  const fetchUserStats = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setStats({
        repos: data.public_repos,
        stars: 0,
        followers: data.followers,
        following: data.following,
      });
    } catch (error) {
      console.error("Error fetching user stats:", error);
    }
  };

  useEffect(() => {
    const GITHUB_STATS_URL =
      "https://github-contributions-api.jogruber.de/v4/krsnna-05";
    fetchGithubStats(GITHUB_STATS_URL);
    fetchUserStats("krsnna-05");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black rounded-lg p-3 w-fit mt-2 mx-auto"
    >
      <h3 className="text-white font-semibold mb-6">GitHub Contributions</h3>

      <GitHubCalendar
        username="krsnna-05"
        blockSize={12}
        blockMargin={4}
        fontSize={10}
        showTotalCount={false}
        showColorLegend={false}
        showWeekdayLabels={false}
        transformData={(data) =>
          data.filter((day) => {
            const d = new Date(day.date);
            const now = new Date();
            const threeMonthsAgo = new Date();
            threeMonthsAgo.setMonth(now.getMonth() - 3);
            return d >= threeMonthsAgo;
          })
        }
      />

      {/* Stats Grid */}
      <div className="flex flex-col gap-4 border-t border-gray-800 pt-4">
        <div className=" flex justify-around">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-lg font-bold text-green-400">
              {stats.repos}
            </div>
            <div className="text-xs text-gray-500 uppercase mt-1">Repos</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="text-lg font-bold text-green-400">
              {stats.stars}
            </div>
            <div className="text-xs text-gray-500 uppercase mt-1">Stars</div>
          </motion.div>
        </div>
        <div className=" flex justify-around ">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <div className="text-lg font-bold text-green-400">
              {stats.followers}
            </div>
            <div className="text-xs text-gray-500 uppercase mt-1">
              Followers
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="text-lg font-bold text-green-400">
              {stats.following}
            </div>
            <div className="text-xs text-gray-500 uppercase mt-1">
              Following
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GithubStatsCard;

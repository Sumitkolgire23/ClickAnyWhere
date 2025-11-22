// ai.js - simple AI-sorted suggestion (stub)
export function recommend(websites, trendingCounts, category){
  const list = websites.slice();
  list.sort((a,b)=> (trendingCounts[b]||0) - (trendingCounts[a]||0));
  return list.slice(0,10);
}
export interface Category {
  category: string;
  score: number;
  icon: string;
}
export const parseDetails = (results: Category[]) => {
  const details: Record<string, number> = {};
  let total = 0;
  results.forEach((c) => {
    details[c.category.toLowerCase()] = c.score;
    total = total + c.score;
  });
  const score = Math.round(total / results.length);
  const { reaction, memory, verbal, visual } = details;
  return { reaction, memory, verbal, visual, score };
};

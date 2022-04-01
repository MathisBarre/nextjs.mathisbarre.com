export function parseDate(date: string) {
  return date.split("-").reverse();
}

export function getYearColor(year: keyof typeof color) {
  const color = {
    "2022": "bg-blue-900",
    "2021": "bg-blue-700",
    "2020": "bg-blue-500",
    "2019": "bg-blue-300",
    "2018": "bg-blue-100",
    "2017": "bg-blue-100",
    "2016": "bg-blue-100",
  };

  return color[year];
}

export type foo = "2022" | "2021" | "2020" | "2019" | "2018" | "2017" | "2016";

const bagHolder = { trustMeBro: "Some server value", count: 0 };

export function setBag(bag: string) {
  bagHolder.trustMeBro = bag;
  bagHolder.count++;
}

export function getBag(): string {
  return `${bagHolder.trustMeBro}. Edited x${bagHolder.count}`;
}

interface portsType {
  [key: string]: number
}

export const ports: portsType = {
  balance: 43001,
  brain: 43002,
  network: 43003,
  order: 43004,
  plan: 43005,
  async: 43006,
  discord: 43007
}

export const getBaseUrl = (): string => {
  return 'http://localhost'
}
export const getUrl = (moduleName: string): string => {
  return `${getBaseUrl()}:${ports[moduleName]}`
}

/**
 * @see https://shields.io/badges/endpoint-badge
 */
export type ShieldResponse = {
  schemaVersion: 1
  label: string
  message: string
  color?: string
  labelColor?: string
  isError?: boolean
  namedLogo?: string
  logoSvg?: string
  logoColor?: string
  logoWidth?: string | number
  logoPosition?: string | number
  style?: 'flat' | 'otherStyles'
}

export interface Options {
  // define your plugin options here
  enable?: boolean
  target: string
  showCaddyLog?: boolean
  /** default `false` */
  https?: boolean
  healthCheck?: boolean
}

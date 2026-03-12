type CubicBezier = [number, number, number, number]

export const easings = {
  smooth: [0.22, 1, 0.36, 1] as CubicBezier,
  snappy: [0.16, 1, 0.3, 1] as CubicBezier,
  dramatic: [0.76, 0, 0.24, 1] as CubicBezier,
  bounce: [0.34, 1.56, 0.64, 1] as CubicBezier,
  slowStart: [0.42, 0, 0.58, 1] as CubicBezier,
}

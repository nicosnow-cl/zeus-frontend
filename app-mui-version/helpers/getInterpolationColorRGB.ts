const getInterpolationColorRGB = (rgbArr1: number[], rgbArr2: number[], factor: number = 0.5) => {
  let result = rgbArr1.slice();

  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (rgbArr2[i] - rgbArr1[i]));
  }

  return result;
};

export default getInterpolationColorRGB;

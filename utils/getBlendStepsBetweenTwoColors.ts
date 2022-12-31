import getInterpolationColorRGB from './getInterpolationColorRGB';

const getBlendStepsBetweenTwoColors = (rgb1: string, rgb2: string, maxSteps: number = 5) => {
  const stepFactor = 1 / (maxSteps - 1);
  const interpolatedColorArray = [];

  const rgbArr1 = rgb1.match(/\d+/g)?.map(Number) || [];
  const rgbArr2 = rgb2.match(/\d+/g)?.map(Number) || [];

  for (let step = 0; step < maxSteps; step++) {
    interpolatedColorArray.push(getInterpolationColorRGB(rgbArr1, rgbArr2, stepFactor * step));
  }

  return interpolatedColorArray;
};

export default getBlendStepsBetweenTwoColors;

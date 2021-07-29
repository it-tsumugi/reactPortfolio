import mediaOriginal from "styled-media-query";
import {
  ThemedStyledProps,
  InterpolationValue,
  FlattenInterpolation,
} from "styled-components";

/**
 * https://github.com/morajabi/styled-media-query/blob/master/src/index.d.ts
 */
type InterpolationFunction<Props, Theme> = (
  props: ThemedStyledProps<Props, Theme>
) => InterpolationValue | FlattenInterpolation<ThemedStyledProps<Props, Theme>>;

type GeneratorFunction<Props, Theme> = (
  strings: TemplateStringsArray,
  ...interpolations: (
    | InterpolationValue
    | InterpolationFunction<Props, Theme>
    | FlattenInterpolation<ThemedStyledProps<Props, Theme>>
  )[]
) => any;

const media: { [v: string]: GeneratorFunction<unknown, any> } = {
  /*1170px以上*/
  xl: (...args) => mediaOriginal.greaterThan("large")(...args),
  /*768px以上1170px以下*/
  lg: (...args) => mediaOriginal.between("medium", "large")(...args),
  /*768px以下*/
  md: (...args) => mediaOriginal.lessThan("medium")(...args),
  /*1170px以下*/
  lessThanlg: (...args) => mediaOriginal.lessThan("large")(...args),
};

export default media;

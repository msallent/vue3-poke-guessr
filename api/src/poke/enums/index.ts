import {
  MAX_ID_FIRST_GEN,
  MAX_ID_SECOND_GEN,
  MAX_ID_THIRD_GEN,
  MIN_ID_FIRST_GEN,
  MIN_ID_SECOND_GEN,
  MIN_ID_THIRD_GEN,
} from '../constants';

export enum GenerationMinValue {
  'i' = MIN_ID_FIRST_GEN,
  'ii' = MIN_ID_SECOND_GEN,
  'iii' = MIN_ID_THIRD_GEN,
  'all' = MIN_ID_FIRST_GEN,
}

export enum GenerationMaxValue {
  'i' = MAX_ID_FIRST_GEN,
  'ii' = MAX_ID_SECOND_GEN,
  'iii' = MAX_ID_THIRD_GEN,
  'all' = MAX_ID_THIRD_GEN,
}

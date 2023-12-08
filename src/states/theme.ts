import { atomWithStorage } from 'jotai/utils';
import { Theme } from '@/types';

export const themeAtom = atomWithStorage('theme', Theme.Dark);

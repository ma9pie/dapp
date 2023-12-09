import { atomWithStorage } from 'jotai/utils';

import { Theme } from '@/types';

/**
 * @deprecated
 * Use next-themes's useTheme instead
 */
export const themeAtom = atomWithStorage('theme', Theme.Dark);

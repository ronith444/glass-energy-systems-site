# Gradient Profile

The script samples the central 80% of each screenshot row, writes RGB/luma CSV profiles, and reports the largest smoothed row-to-row color changes. Large jumps inside images, panels, text, or the sticky header are expected; transition quality is judged from the row profile plus visual screenshots.

## before_service_1440

- Source: `service-scene-1440.png`
- CSV: `before_service_1440.csv`
- Top row RGB/luma: `6.5, 25.0, 21.3` / `20.8`
- Mid row RGB/luma: `154.8, 158.0, 143.5` / `156.3`
- Bottom row RGB/luma: `241.6, 239.7, 234.7` / `239.7`
- Largest smoothed row changes:
  - row `521` (`52.15%`): `21.71`
  - row `522` (`52.25%`): `21.51`
  - row `525` (`52.55%`): `21.42`
  - row `523` (`52.35%`): `21.38`
  - row `524` (`52.45%`): `21.37`
  - row `526` (`52.65%`): `21.31`
  - row `527` (`52.75%`): `20.58`
  - row `520` (`52.05%`): `17.53`

## after_service_1440

- Source: `service-scene-1440.png`
- CSV: `after_service_1440.csv`
- Top row RGB/luma: `6.5, 25.0, 21.8` / `20.8`
- Mid row RGB/luma: `153.8, 161.4, 145.6` / `158.6`
- Bottom row RGB/luma: `231.0, 229.5, 221.0` / `229.2`
- Largest smoothed row changes:
  - row `521` (`52.15%`): `20.98`
  - row `522` (`52.25%`): `20.64`
  - row `523` (`52.35%`): `20.55`
  - row `525` (`52.55%`): `20.52`
  - row `524` (`52.45%`): `20.52`
  - row `526` (`52.65%`): `20.42`
  - row `527` (`52.75%`): `19.69`
  - row `520` (`52.05%`): `17.18`

## after_service_390

- Source: `service-scene-390.png`
- CSV: `after_service_390.csv`
- Top row RGB/luma: `15.0, 44.0, 38.1` / `37.4`
- Mid row RGB/luma: `35.6, 53.0, 47.9` / `48.9`
- Bottom row RGB/luma: `123.4, 139.2, 125.2` / `134.9`
- Largest smoothed row changes:
  - row `604` (`67.19%`): `32.05`
  - row `605` (`67.30%`): `32.04`
  - row `603` (`67.07%`): `31.95`
  - row `606` (`67.41%`): `31.94`
  - row `607` (`67.52%`): `31.79`
  - row `602` (`66.96%`): `31.72`
  - row `608` (`67.63%`): `31.69`
  - row `601` (`66.85%`): `26.48`

## before_cta_footer_390

- Source: `cta-footer-390.png`
- CSV: `before_cta_footer_390.csv`
- Top row RGB/luma: `247.5, 242.4, 235.5` / `243.0`
- Mid row RGB/luma: `83.7, 111.4, 105.6` / `105.1`
- Bottom row RGB/luma: `49.4, 108.5, 129.4` / `97.5`
- Largest smoothed row changes:
  - row `89` (`9.90%`): `36.59`
  - row `92` (`10.23%`): `36.42`
  - row `88` (`9.79%`): `36.39`
  - row `19` (`2.11%`): `36.32`
  - row `90` (`10.01%`): `36.32`
  - row `18` (`2.00%`): `36.17`
  - row `20` (`2.22%`): `36.15`
  - row `21` (`2.34%`): `36.13`

## after_cta_footer_1440

- Source: `cta-footer-1440.png`
- CSV: `after_cta_footer_1440.csv`
- Top row RGB/luma: `44.4, 65.1, 57.8` / `60.2`
- Mid row RGB/luma: `40.5, 61.0, 58.8` / `56.5`
- Bottom row RGB/luma: `16.4, 31.9, 31.4` / `28.6`
- Largest smoothed row changes:
  - row `92` (`9.21%`): `17.61`
  - row `91` (`9.11%`): `17.53`
  - row `89` (`8.91%`): `17.36`
  - row `90` (`9.01%`): `17.32`
  - row `88` (`8.81%`): `17.26`
  - row `86` (`8.61%`): `17.08`
  - row `87` (`8.71%`): `16.99`
  - row `986` (`98.70%`): `12.36`

## after_cta_footer_390

- Source: `cta-footer-390.png`
- CSV: `after_cta_footer_390.csv`
- Top row RGB/luma: `247.0, 241.0, 234.0` / `241.8`
- Mid row RGB/luma: `93.8, 117.7, 112.6` / `112.2`
- Bottom row RGB/luma: `7.2, 30.7, 27.2` / `25.5`
- Largest smoothed row changes:
  - row `92` (`10.23%`): `36.69`
  - row `19` (`2.11%`): `36.31`
  - row `18` (`2.00%`): `36.16`
  - row `20` (`2.22%`): `36.11`
  - row `16` (`1.78%`): `34.45`
  - row `21` (`2.34%`): `33.26`
  - row `23` (`2.56%`): `33.16`
  - row `22` (`2.45%`): `32.16`

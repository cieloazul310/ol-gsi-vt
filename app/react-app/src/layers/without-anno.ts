import { gsiOptVtLayer } from '@cieloazul310/ol-gsi-vt';

const withoutAnno = gsiOptVtLayer({
  layers: [
    'AdmArea',
    'AdmBdry',
    'BldA',
    'Cntr',
    'Cstline',
    'Isbt',
    'PwrTrnsmL',
    'RailCL',
    'RailTrCL',
    'RdEdg',
    'RdCompt',
    'RdCL',
    'RvrCL',
    'SpcfArea',
    'StrctLine',
    'StrctArea',
    'TpgphArea',
    'TpgphLine',
    'WA',
    'WL',
    'WStrA',
    'WStrL',
    'WRltLine',
  ],
});

export default withoutAnno;

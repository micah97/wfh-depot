module.exports = {
  name: 'material-module',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/material-module',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

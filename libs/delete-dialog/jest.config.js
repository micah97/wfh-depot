module.exports = {
  name: 'delete-dialog',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/delete-dialog',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

import { async, TestBed } from '@angular/core/testing';
import { MaterialModuleModule } from './material-module.module';

describe('MaterialModuleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModuleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MaterialModuleModule).toBeDefined();
  });
});

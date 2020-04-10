import { async, TestBed } from '@angular/core/testing';
import { DeleteDialogModule } from './delete-dialog.module';

describe('DeleteDialogModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DeleteDialogModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DeleteDialogModule).toBeDefined();
  });
});

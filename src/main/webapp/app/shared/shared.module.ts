import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CmsSharedLibsModule, CmsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CmsSharedLibsModule, CmsSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CmsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CmsSharedModule {
  static forRoot() {
    return {
      ngModule: CmsSharedModule
    };
  }
}

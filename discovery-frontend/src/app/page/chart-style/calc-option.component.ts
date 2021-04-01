/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, ElementRef, Injector, Input} from '@angular/core';
import {BaseOptionComponent} from "./base-option.component";
import {TotalValueStyle, UIGridChart} from '../../common/component/chart/option/ui-option/ui-grid-chart';
import {UIOption} from '../../common/component/chart/option/ui-option';
import {FontSize, GridViewType, Operator, UIPosition} from '../../common/component/chart/option/define/common';
import * as _ from 'lodash';

@Component({
  selector: 'calc-option',
  templateUrl: './calc-option.component.html'
})
export class CalculatedRowOptionComponent extends BaseOptionComponent {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Private Variables
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Protected Variables
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Public Variables
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  public operatorDefaultIdx: number = 0;

  public hAlignDefaultIdx: number = 0;

  // 차트정보
  @Input('uiOption')
  public set setUiOption(uiOption: UIOption) {
    // Set
    this.uiOption = uiOption;

    // 원본데이터인경우 연산행 제거
    if (GridViewType.MASTER == (<UIGridChart>this.uiOption).dataType && this.uiOption['totalValueStyle']) {
      this.uiOption = <UIOption>_.extend({}, this.uiOption, {totalValueStyle: null});
      this.update();
    }
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Constructor
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  // 생성자
  constructor(protected elementRef: ElementRef,
              protected injector: Injector) {
    super(elementRef, injector);
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Public Method
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /**
   * 로우 설정 On/Off
   */
  public toggleRow(): void {
    const uiOption = (<UIGridChart>this.uiOption);

    if (!uiOption.totalValueStyle) {
      // annotation 최초설정시
      uiOption.totalValueStyle = this._getDefaultConfig();
    } else {
      // annotation이 있을때
      uiOption.totalValueStyle = null;
    }

    this.onChangedRowConfig(uiOption.totalValueStyle);
  } // func - toggleRow

  /**
   * 로우 설정 변경
   * @param style
   */
  public onChangedRowConfig(style: TotalValueStyle) {
    this.uiOption = <UIOption>_.extend({}, this.uiOption, {totalValueStyle: style});
    this.update();
  } // func - onChangedRowConfig

  /**
   * 부분합 로우 설정 On/Off
   */
  public togglePartialRow(): void {
    const uiOption = (<UIGridChart>this.uiOption);

    if (!uiOption.subTotalValueStyle) {
      // annotation 최초설정시
      uiOption.subTotalValueStyle = this._getDefaultConfig();
    } else {
      // annotation이 있을때
      uiOption.subTotalValueStyle = null;
    }

    this.onChangedPartialRowConfig(uiOption.subTotalValueStyle);
  } // func - togglePartialRow

  /**
   * 부분합 로우 설정 변경
   * @param style
   */
  public onChangedPartialRowConfig(style: TotalValueStyle) {
    this.uiOption = <UIOption>_.extend({}, this.uiOption, {subTotalValueStyle: style});
    this.update();
  } // func - onChangedPartialRowConfig

  /**
   * 컬럼 설정 On/Off
   */
  public toggleColumn(): void {
    const uiOption = (<UIGridChart>this.uiOption);

    // annotation 최초설정시
    if (!uiOption.showCalculatedColumnStyle) {
      uiOption.showCalculatedColumnStyle = this._getDefaultConfig();
    } else {
      uiOption.showCalculatedColumnStyle = null;
    }

    this.onChangedColumnConfig(uiOption.showCalculatedColumnStyle);
  } // func - toggleColumn

  /**
   * 컬럼 설정 변경
   * @param style
   */
  public onChangedColumnConfig(style: TotalValueStyle) {
    this.uiOption = <UIOption>_.extend({}, this.uiOption, {showCalculatedColumnStyle: style});
    this.update();
  } // func - onChangedColumnConfig

  /**
   * 부분합 컬럼 설정 On/Off
   */
  public togglePartialColumn(): void {
    const uiOption = (<UIGridChart>this.uiOption);

    // annotation 최초설정시
    if (!uiOption.subTotalColumnStyle) {
      uiOption.subTotalColumnStyle = this._getDefaultConfig();
    } else {
      uiOption.subTotalColumnStyle = null;
    }

    this.onChangedPartialColumnConfig(uiOption.subTotalColumnStyle);
  } // func - togglePartialColumn

  /**
   * 부분합 컬럼 설정 변경
   * @param style
   */
  public onChangedPartialColumnConfig(style: TotalValueStyle) {
    this.uiOption = <UIOption>_.extend({}, this.uiOption, {subTotalColumnStyle: style});
    this.update();
  } // func - onChangedPartialColumnConfig

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Private Method
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
  /**
   * 기본 설정
   * @private
   */
  private _getDefaultConfig() {
    return {
      fontSize: FontSize.NORMAL,
      fontStyles: [],
      fontColor: '',
      backgroundColor: '#eeeeee',
      hAlign: UIPosition.AUTO,
      vAlign: UIPosition.MIDDLE,
      aggregationType: Operator.SUM
    };
  } // func - _getDefaultConfig

}

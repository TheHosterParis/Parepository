import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ration',
  templateUrl: './ration.component.html',
  styleUrls: ['./ration.component.css']
})

export class RationComponent implements OnInit {

  rations = '450';
  ble = '150';
  indiceBle = 1;
  colza = '10';
  indiceColza = 1;
  paille = '300';
  indicePaille = 1;
  mais = '50';
  indiceMais = 1;
  currentNumber = '0';
  firstOperand = null;
  number = null;
  operator = null;
  waitForSecondNumber = false;
  aliment = '';
  instruction = 'Instructions';
  instruction2 = 'Instructions2';
  modified: boolean;

  dataStatCounter: any =
  [
      { Aliment: 'ble', Share: this.ble },
      { Aliment: 'colza', Share: this.colza },
      { Aliment: 'paille', Share: this.paille },
      { Aliment: 'mais', Share: this.mais }
  ];

  charts: any[] = [
    { title: 'compositiond de la ration', label: 'StatRation', dataSource: this.dataStatCounter }
];
padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

  seriesGroups: any[] =
    [
      {
        type: 'pie',
        showLegend: true,
        enableSeriesToggle: true,
        series:
          [
            {
              dataField: 'Share',
              displayText: 'Aliment',
              showLabels: true,
              labelRadius: 160,
              labelLinesEnabled: true,
              labelLinesAngles: true,
              labelsAutoRotate: false,
              initialAngle: 0,
              radius: 125,
              minAngle: 0,
              maxAngle: 180,
              centerOffset: 0,
              offsetY: 170,
              formatFunction: (value: any, itemIdx: any, serieIndex: any, groupIndex: any) => {
                if (isNaN(value)) {
                  return value;
                }
                return value + 'Kg';
              }
            }
          ]
      }
    ];

  constructor() { }

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }
    return 850;
    }

  ngOnInit(): void {
    this.modified = false;
  }

  modifier(): void {
    this.modified = true;
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
        this.currentNumber += '.';
    }
  }

  private doCalculation(op , secondOp, indice) {
    switch (op) {
      case '+':
      return indice += secondOp;
      case '-':
      return secondOp -= indice ;
    }
  }

  public getAliment(type: string) {
    switch (type) {
      case 'rations':
        return this.rations;
      case 'ble':
        return this.ble;
      case 'colza':
        return this.colza;
      case 'paille':
        return this.paille;
      case 'mais':
        return this.mais;
    }
  }

  public replaceOutput(type: string, aliment) {
    switch (type) {
      case 'rations':
        return this.rations = aliment;
      case 'ble':
        return this.ble = aliment;
      case 'colza':
        return this.colza = aliment;
      case 'paille':
        return this.paille = aliment;
      case 'mais':
        return this.mais = aliment;
    }
  }

  public getOperation(op: string, indice: number, type: string) {
    console.log(op);
    let aliment = this.getAliment(type);
    console.log(aliment);
    const result = this.doCalculation(op, Number(aliment), indice);
    aliment = String(result);
    this.replaceOutput(type, aliment);
    console.log(aliment);
  }

  onSubmit(formData): void {
    console.log(this.rations);
    console.log(formData.rations);
    this.dataStatCounter[0].Share = formData.ble;
    this.dataStatCounter[1].Share = formData.colza;
    this.dataStatCounter[2].Share = formData.paille;
    this.dataStatCounter[3].Share = formData.mais;
  }

}

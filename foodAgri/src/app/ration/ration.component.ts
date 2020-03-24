import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ration',
  templateUrl: './ration.component.html',
  styleUrls: ['./ration.component.css']
})

export class RationComponent implements OnInit {

  rations = '140';
  ble = '3.2';
  blerxRation = Number(this.ble) * Number(this.rations);
  indiceBle = 0.1;
  soja = '1.8';
  sojaxRation = Number(this.soja) * Number(this.rations);
  indiceSoja = 1;
  colza = '3.6';
  colzaxRation = Number(this.colza) * Number(this.rations);
  indiceColza = 1;
  herbe = '10';
  herbexRation = Number(this.herbe) * Number(this.rations);
  indiceherbe = 1;
  mais = '32.5';
  maisxRation = Number(this.mais) * Number(this.rations);
  indiceMais = 1;
  mineraux = '4';
  minerauxxRation = Number(this.mineraux) * Number(this.rations);
  indiceMineraux = 1;
/*   bicarbonate = '1';
  bicarbonatexRation = Number(this.bicarbonate) * Number(this.rations);
  indice = 1; */
  calcium = '1';
  calciumxRation = Number(this.calcium) * Number(this.rations);
  indiceCalcium = 1;
  sel = '1/3';
  selxRation = Number(this.sel) * Number(this.rations);
  indiceSel = 1;
  uree = '4';
  ureexRation = Number(this.uree) * Number(this.rations);
  indiceUree = 1;
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
      { Aliment: 'herbe', Share: this.herbe },
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
        return this.blerxRation;
      case 'colza':
        return this.colza;
      case 'herbe':
        return this.herbe;
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
      case 'herbe':
        return this.herbe = aliment;
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
    this.rations = formData.rations;
    this.ble = formData.ble;
    this.blerxRation = Number(this.ble) * Number(this.rations);
    this.dataStatCounter[0].Share = formData.ble;
    this.colza = formData.colza;
    this.colzaxRation = Number(this.colza) * Number(this.rations);
    this.dataStatCounter[1].Share = formData.colza;
    this.herbe = formData.herbe;
    this.herbexRation = Number(this.herbe) * Number(this.rations);
    this.dataStatCounter[2].Share = formData.herbe;
    this.mais = formData.mais;
    this.maisxRation = Number(this.mais) * Number(this.rations);
    this.dataStatCounter[3].Share = formData.mais;
    console.log(this.rations);
    console.log(formData.rations);
  }
}

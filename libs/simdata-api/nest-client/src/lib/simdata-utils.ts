import { DatasetData } from './model/dataset-data';
import nj from '@d4c/numjs';
import { HDF5File } from './model/hdf5-file';
import { HDF5Group } from './model/hdf5-group';
import { HDF5Dataset } from './model/hdf5-dataset';
import { HDF5Attribute } from './model/hdf5-attribute';

export function datasetDataToNjArray(datasetData: DatasetData): nj.NdArray {
  // transform datasetData.values into an array of floats (replacing 'nan' with NaN, 'inf' with Infinity, and '-inf' with -Infinity)
  const number_values: Array<number> = datasetData.values.map((value: number | string): number => {
    if (value === 'nan') {
      return NaN;
    } else if (value === 'inf') {
      return Infinity;
    } else if (value === '-inf') {
      return -Infinity;
    } else if (typeof value === 'number') {
      return value as number;
    } else {
      throw new Error(`Invalid value in datasetData.values: ${value}`);
    }
  });
  return nj.array(number_values).reshape(...datasetData.shape);
}

export function njArrayToDatasetData(njArray: nj.NdArray): DatasetData {
  const number_values = njArray.flatten().tolist() as Array<number>;
  // transform number_values into array of numbers or strings ('nan', 'inf', '-inf') where 'nan' is NaN, 'inf' is Infinity, and '-inf' is -Infinity
  const mixed_values: Array<number | string> = number_values.map((value: number): number | string => {
    if (isNaN(value)) {
      return 'nan';
    } else if (value === Infinity) {
      return 'inf';
    } else if (value === -Infinity) {
      return '-inf';
    } else {
      return value;
    }
  });
  return {
    shape: njArray.shape,
    values: mixed_values as Array<number | string>,
  };
}

export function extractArray(njArray: nj.NdArray, index: number): Array<number> {
  return njArray.tolist()[index] as Array<number>;
}

export interface HDF5Visitor {
  visitFile(file: HDF5File): void;
  visitGroup(group: HDF5Group): void;
  visitDataset(dataset: HDF5Dataset): void;
  visitAttribute(attribute: HDF5Attribute): void;
}

export class BaseHDF5Visitor implements HDF5Visitor {
  visitFile(file: HDF5File): void {}
  visitGroup(group: HDF5Group): void {}
  visitDataset(dataset: HDF5Dataset): void {}
  visitAttribute(attribute: HDF5Attribute): void {}
}

export function visitHDF5File(file: HDF5File, visitor: HDF5Visitor): void {
  visitor.visitFile(file);

  // Visit each child group, dataset, and attribute
  for (const group of file.groups) {
    visitHDF5Group(group, visitor);
  }
  // for (const dataset of file.datasets) {
  //   visitHDF5Dataset(dataset, visitor);
  // }
  // for (const attribute of file.attributes) {
  //   visitHDF5Attribute(attribute, visitor);
  // }
}

export function visitHDF5Group(group: HDF5Group, visitor: HDF5Visitor): void {
  visitor.visitGroup(group);

  // Visit each child group, dataset, and attribute
  // for (const child_group of group.groups) {
  //   visitHDF5Group(child_group, visitor);
  // }
  for (const dataset of group.datasets) {
    visitHDF5Dataset(dataset, visitor);
  }
  for (const attribute of group.attributes) {
    visitHDF5Attribute(attribute, visitor);
  }
}

export function visitHDF5Dataset(dataset: HDF5Dataset, visitor: HDF5Visitor): void {
  visitor.visitDataset(dataset);

  // Visit each attribute
  for (const attribute of dataset.attributes) {
    visitHDF5Attribute(attribute, visitor);
  }
}

export function visitHDF5Attribute(attribute: HDF5Attribute, visitor: HDF5Visitor): void {
  visitor.visitAttribute(attribute);
}

import nj from '@d4c/numjs';
import { DatasetData } from './model/dataset-data';
import { datasetDataToNjArray, njArrayToDatasetData } from './simdata-utils';

describe('test conversion between DatasetData and nj.array', () => {
  // add a before clause to initialize the njArray and datasetData variables and import simdata-api/nest-client nestjs module

  const njArray_number = nj.array([1, 2, 3, 4, 5, 6]).reshape(2, 3);

  const njArray_number_flat = nj.array([1, 2, 3, 4, 5, 6]);

  const datasetData_number = { values: [1, 2, 3, 4, 5, 6], shape: [2, 3] } as DatasetData;

  it('should convert nj.array to DatasetData', () => {
    expect(njArrayToDatasetData(njArray_number)).toEqual(datasetData_number);
  });

  it('should convert DatasetData to nj.array', () => {
    expect(datasetDataToNjArray(datasetData_number)).toEqual(njArray_number);
  });

  it('nj.array.flatten() should work as expected', () => {
    expect(datasetDataToNjArray(datasetData_number).flatten()).toEqual(njArray_number_flat);
  });

  it('nj.array.tolist[index] should work as expected', () => {
    expect(njArray_number.tolist()[0]).toEqual([1, 2, 3]);
    expect(njArray_number.tolist()[1]).toEqual([4, 5, 6]);
  });

  const njArray_mixed = nj.array([1, NaN, 3, Infinity, 5, -Infinity]).reshape(2, 3);

  const njArray_mixed_flat = nj.array([1, NaN, 3, Infinity, 5, -Infinity]);

  const datasetData_mixed = { values: [1, 'nan', 3, 'inf', 5, '-inf'], shape: [2, 3] } as DatasetData;

  it('should convert nj.array (with special number values) to DatasetData (with numbers and special string values)', () => {
    const ds_mixed: DatasetData = njArrayToDatasetData(njArray_mixed);
    expect(ds_mixed).toEqual(datasetData_mixed);
  });

  it('should convert DatasetData (with numbers and special string values) to nj.array (with special number values)', () => {
    expect(datasetDataToNjArray(datasetData_mixed)).toEqual(njArray_mixed);
  });

  it('nj.array.flatten() (with special number values) should work as expected', () => {
    expect(datasetDataToNjArray(datasetData_mixed).flatten()).toEqual(njArray_mixed_flat);
  });

  it('nj.array.tolist[index] should work as expected', () => {
    expect(njArray_mixed.tolist()[0]).toEqual([1, NaN, 3]);
    expect(njArray_mixed.tolist()[1]).toEqual([Infinity, 5, -Infinity]);
  });
});

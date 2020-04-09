import { ChartDTO } from '../resources/chart-type.dto';
import { VisualizationDataFieldDTO } from './visualization-data-field.dto';

export class VisualizationLayoutElementDTO {
  chartType: ChartDTO;
  data: VisualizationDataFieldDTO[];
}

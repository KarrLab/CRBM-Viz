/**
 * BioSimulations COMBINE API
 * Endpoints for working with models (e.g., [CellML](https://cellml.org/), [SBML](http://sbml.org/)), simulation experiments (e.g., [Simulation Experiment Description Language (SED-ML)](https://sed-ml.org/)), metadata ([OMEX Metadata](https://sys-bio.github.io/libOmexMeta/)), and simulation projects ([COMBINE/OMEX archives](https://combinearchive.org/)).  Note, this API may change significantly in the future.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: info@biosimulations.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Algorithm substitution policy, the degree to witch algorithms can be substituted for each other.
 */
export interface KisaoAlgorithmSubstitutionPolicy {
  /**
   * Id of the policy
   */
  id: KisaoAlgorithmSubstitutionPolicyId;
  /**
   * Level of the policy (0: most restrictive to 9: least restrictive)
   */
  level: number;
  /**
   * Name of the policy
   */
  name: KisaoAlgorithmSubstitutionPolicyName;
  /**
   * Type
   */
  _type: KisaoAlgorithmSubstitutionPolicyTypeEnum;
}
export enum KisaoAlgorithmSubstitutionPolicyId {
  NONE = 'NONE',
  SAME_METHOD = 'SAME_METHOD',
  SAME_MATH = 'SAME_MATH',
  SIMILAR_APPROXIMATIONS = 'SIMILAR_APPROXIMATIONS',
  DISTINCT_APPROXIMATIONS = 'DISTINCT_APPROXIMATIONS',
  DISTINCT_SCALES = 'DISTINCT_SCALES',
  SAME_VARIABLES = 'SAME_VARIABLES',
  SIMILAR_VARIABLES = 'SIMILAR_VARIABLES',
  SAME_FRAMEWORK = 'SAME_FRAMEWORK',
  ANY = 'ANY',
}
export enum KisaoAlgorithmSubstitutionPolicyName {
  None = 'None',
  Same_method = 'Same method',
  Same_math = 'Same math',
  Similar_approximations = 'Similar approximations',
  Distinct_approximations = 'Distinct approximations',
  Distinct_scales = 'Distinct scales',
  Same_variables = 'Same variables',
  Similar_variables = 'Similar variables',
  Same_framework = 'Same framework',
  Any = 'Any',
}
export enum KisaoAlgorithmSubstitutionPolicyTypeEnum {
  KisaoAlgorithmSubstitutionPolicy = 'KisaoAlgorithmSubstitutionPolicy',
}
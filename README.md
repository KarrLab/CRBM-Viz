![Logo](https://raw.githubusercontent.com/biosimulations/Biosimulations/dev/biosimulations/libs/shared/assets/src/assets/images/biosimulations-logo/logo-white.svg)

# BioSimulations

More comprehensive and more predictive models have the potential to advance biology, bioengineering, and medicine. Building more predictive models will likely require the collaborative efforts of many investigators. This requires teams to be able to share and reuse model components and simulations. Despite extensive efforts to develop standards such as [COMBINE/OMEX](https://combinearchive.org/), [SBML](http://sbml.org), and [SED-ML](https://sed-ml.org), it remains difficult to reuse many models and simulations. One challenge to reusing models and simulations is the diverse array of incompatible modeling formats and simulation tools.

This package provides three tools which address this challenge:
- [BioSimulators](https://biosimulators.org) is a registry of containerized simulation tools that provide consistent interfaces. BioSimulators makes it easier to find and run simulations.
- [runBioSimulations](https://run.biosimulations.org) is a simple web application for using the BioSimulators containers to run simulations. This tool makes it easy to run a broad range of simulations without having to install any software.
- [BioSimulations](https://biosimulations.org) is a platform for sharing and running modeling studies. BioSimulations provides a central place for investigators to exchange studies. BioSimulations uses the BioSimulators simulation tools, and builds on the functionality of runBioSimulations.

This package provides the code for the BioSimulations, runBioSimulations, and BioSimulations websites, as well as the code for the backend services for all three applications. The package is implemented in TypeScript using Angular and NestJS.

## Getting started

### Users
Please use the hosted versions of BioSimulations, runBioSimulations, and BioSimulators at https://biosimulations.org, https://run.biosimulations.org, and https://biosimulators.org.

### Developers
We welcome contributions to BioSimulations, runBioSimulations, and BioSimulations! Please see the [Guide to Contributing](CONTRIBUTING.md) for information about how to get started including how to install this package and how to run BioSimulations, runBioSimulations, and BioSimulators locally.

## License

This package is released under the [MIT license](LICENSE). This package uses a number of open-source third-party packages. Their licenses are summarized in [LICENSE-DEPENDENCIES](LICENSE-DEPENDENCIES).

## Development team

This package was developed by the [Karr Lab](https://www.karrlab.org) at the Icahn School of Medicine at Mount Sinai in New York and the [Center for Cell Analysis and Modeling](https://health.uconn.edu/cell-analysis-modeling/) at the University of Connecticut Health Center as part of the [Center for Reproducible Biomodeling Modeling](https://reproduciblebiomodels.org).

- [Bilal Shaikh](https://www.bshaikh.com)
- [Jonathan Karr](https://www.karrlab.org)
- Akhil Marupilla
- [Mike Wilson](https://www.linkedin.com/in/mike-wilson-08b3324/)
- [Ion Moraru](https://facultydirectory.uchc.edu/profile?profileId=Moraru-Ion)

## Funding

This package was developed with support from the National Institute for Bioimaging and Bioengineering (award P41EB023912).

## Questions and comments

Please contact us at [info@biosimulations.org](mailto:info@biosimulations.org) with any questions or comments.

const generatorsPath = require('../jhipster_utils/utils').generatorsPath;

// eslint-disable-next-line import/no-dynamic-require
const constants = require(`${generatorsPath}/generator-constants`);

// Const TEST_DIR = constants.TEST_DIR;
const CLIENT_MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;
const CLIENT_TEST_SRC_DIR = constants.CLIENT_TEST_SRC_DIR;
const SERVER_MAIN_SRC_DIR = constants.SERVER_MAIN_SRC_DIR;
const SERVER_MAIN_RES_DIR = constants.SERVER_MAIN_RES_DIR;
const SERVER_TEST_SRC_DIR = constants.SERVER_TEST_SRC_DIR;
// Const SERVER_TEST_RES_DIR = constants.SERVER_TEST_RES_DIR;
// const DOCKER_DIR = constants.DOCKER_DIR;

const expectedFiles = {
  entity: {
    clientNg2: [
      `${CLIENT_MAIN_SRC_DIR}app/entities/company/company.component.html`,
      `${CLIENT_MAIN_SRC_DIR}app/entities/company/company-detail.component.html`,
      `${CLIENT_MAIN_SRC_DIR}app/entities/company/company-update.component.html`,
      `${CLIENT_MAIN_SRC_DIR}app/entities/company/company-delete-dialog.component.html`,
      `${CLIENT_MAIN_SRC_DIR}app/entities/company/company.route.ts`,
      `${CLIENT_MAIN_SRC_DIR}app/entities/company/company.component.ts`,
      `${CLIENT_MAIN_SRC_DIR}app/entities/company/company-update.component.ts`,
      `${CLIENT_MAIN_SRC_DIR}app/entities/company/company-delete-dialog.component.ts`,
      `${CLIENT_MAIN_SRC_DIR}app/entities/company/company-detail.component.ts`,
      `${CLIENT_MAIN_SRC_DIR}app/entities/company/company.service.ts`,
      `${CLIENT_MAIN_SRC_DIR}app/shared/model/company.model.ts`,
      `${CLIENT_TEST_SRC_DIR}spec/app/entities/company/company-delete-dialog.component.spec.ts`,
      `${CLIENT_TEST_SRC_DIR}spec/app/entities/company/company-detail.component.spec.ts`,
      `${CLIENT_TEST_SRC_DIR}spec/app/entities/company/company-update.component.spec.ts`,
      `${CLIENT_TEST_SRC_DIR}spec/app/entities/company/company.component.spec.ts`,
      `${CLIENT_TEST_SRC_DIR}spec/app/entities/company/company.service.spec.ts`
    ],
    server: [
      '.jhipster/Company.json',
      `${SERVER_MAIN_SRC_DIR}com/mycompany/myapp/domain/Company.java`,
      `${SERVER_MAIN_SRC_DIR}com/mycompany/myapp/repository/CompanyRepository.java`,
      `${SERVER_MAIN_SRC_DIR}com/mycompany/myapp/web/rest/CompanyResource.java`,
      `${SERVER_TEST_SRC_DIR}com/mycompany/myapp/web/rest/CompanyResourceIT.java`,
      `${SERVER_MAIN_RES_DIR}config/liquibase/fake-data/company.csv`
      // `${SERVER_MAIN_RES_DIR}config/liquibase/changelog/20190907000100_added_entity_Company.xml`
    ]
  },

  server: [`${SERVER_MAIN_SRC_DIR}com/mycompany/myapp/aop/company/CompanyAwareUserAspect.java`],

  tenantManagementServer: [
    `${SERVER_MAIN_RES_DIR}config/liquibase/data/company/authority.csv`,
    `${SERVER_MAIN_RES_DIR}config/liquibase/data/company/user_authority.csv`,
    `${SERVER_MAIN_RES_DIR}config/liquibase/data/company/user.csv`
  ],

  i18nJson: [`${CLIENT_MAIN_SRC_DIR}i18n/fr/company.json`]
};

module.exports = expectedFiles;

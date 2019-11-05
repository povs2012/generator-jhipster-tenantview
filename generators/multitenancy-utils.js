const _ = require('lodash');
const pluralize = require('pluralize');
const debug = require('debug')('tenantview:utils');

/**
 * Utils file to hold methods common to both generator and sub generator
 */
module.exports = {
    getArrayItemWithFieldValue,
    setupTenantVariables
};

/**
 * Look at an array for a item with field name equal fieldName and with field value equals value.
 * @param {Array} array
 * @param {string} fieldName
 * @param {string} value
 * @returns {boolean} true if found
 */
function getArrayItemWithFieldValue(array, fieldName, value) {
    value = _.toLower(value);
    let found;
    array.forEach(item => {
        const valueFound = item[fieldName];
        if (valueFound !== undefined && _.toLower(valueFound) === _.toLower(value)) {
            found = item;
        }
    });
    return found;
}

// Variations in tenant name
function setupTenantVariables() {
    const generator = this;
    const tenantName =
        generator.tenantName ||
        (generator.configOptions && generator.configOptions.tenantName) ||
        (generator.options && generator.options.tenantName) ||
        (generator.blueprintConfig && generator.blueprintConfig.get('tenantName'));
    if (tenantName === undefined) {
        debug('tenantName is undefined');
        return undefined;
    }
    /* tenant variables */
    const tenantNamePluralizedAndSpinalCased = _.kebabCase(pluralize(tenantName));

    const dest = generator.context || generator;
    // workaround getEntityJson always look for generator.context
    const containsContext = generator.context !== undefined;
    if (!containsContext) generator.context = {};

    const tenantData = generator.getEntityJson(_.upperFirst(tenantName));

    if (!containsContext) generator.context = undefined;
    if (tenantData === undefined) {
        debug(`Error loading ${_.upperFirst(tenantName)}`);
    }
    const entityAngularJSSuffix = dest.entityAngularJSSuffix;
    const context = {};
    context.tenantModule = (tenantData && tenantData.tenantModule) || 'admin';
    context.tenantClientRootFolder =
        generator.options['tenant-root-folder'] || (tenantData && tenantData.clientRootFolder) || `../${context.tenantModule}`;

    context.tenantName = _.camelCase(tenantName);

    context.tenantNameCapitalized = _.upperFirst(tenantName);
    context.tenantClass = context.tenantNameCapitalized;
    context.tenantClassHumanized = _.startCase(context.tenantNameCapitalized);
    context.tenantClassPlural = pluralize(context.tenantClass);
    context.tenantClassPluralHumanized = _.startCase(context.tenantClassPlural);
    context.tenantInstance = _.lowerFirst(tenantName);
    context.tenantInstancePlural = pluralize(context.tenantInstance);
    context.tenantApiUrl = tenantNamePluralizedAndSpinalCased;
    context.tenantFileName = _.kebabCase(context.tenantNameCapitalized + _.upperFirst(entityAngularJSSuffix));
    context.tenantFolderName = generator.getEntityFolderName(context.tenantClientRootFolder, context.tenantFileName);
    context.tenantModelFileName = context.tenantFolderName;
    // context.tenantParentPathAddition = context.getEntityParentPathAddition(context.clientRootFolder);
    context.tenantPluralFileName = tenantNamePluralizedAndSpinalCased + entityAngularJSSuffix;
    context.tenantServiceFileName = context.tenantFileName;
    context.tenantAngularName = context.tenantClass + generator.upperFirstCamelCase(entityAngularJSSuffix);
    context.tenantReactName = context.tenantClass + generator.upperFirstCamelCase(entityAngularJSSuffix);

    context.tenantStateName = `${context.tenantFileName}`;
    context.tenantUrl = `${context.tenantModule}/${context.tenantStateName}`;

    context.tenantTranslationKey = context.tenantInstance;

    context.tenantMenuTranslationKey = `${context.tenantName}`;

    context.tenantName = _.camelCase(tenantName);
    context.tenantNameUpperCase = _.toUpper(tenantName);
    context.tenantNameLowerCase = _.toLower(tenantName);
    context.tenantNameLowerFirst = _.lowerFirst(tenantName);
    context.tenantNameUpperFirst = _.upperFirst(tenantName);
    context.tenantNameSpinalCased = _.kebabCase(context.tenantNameLowerFirst);
    context.tenantNamePlural = pluralize(context.tenantNameLowerFirst);
    context.tenantNamePluralLowerFirst = pluralize(context.tenantNameLowerFirst);
    context.tenantNamePluralUpperFirst = pluralize(context.tenantNameUpperFirst);

    context.angularTenantComponentSuffix = '';
    context.angularTenantSelectorSuffix = '';

    // relative to app root
    context.tenantModelPath = 'shared/admin';
    Object.assign(dest, context);
    return context;
}

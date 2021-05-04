let defaults = {};

export default defaults;

export let primaryOptions = [
    {
        text: 'Consumption',
        value: 'getConsumptions'
    },
    {
        text: 'Production',
        value: 'getProductions'
    },
    {
        text: 'Emission',
        value: 'getEmissions'
    },
    {
        text: 'Renewable Consumption',
        value: 'getRenewableConsumptions'
    },
    {
        text: 'Renewable Production',
        value: 'getRenewableProductions'
    },
    {
        text: 'Non-Renewable Consumption',
        value: 'getNonRenewableConsumptions'
    },
    {
        text: 'Non-Renewable Production',
        value: 'getNonRenewableProductions'
    },
]

export let secondaryOptions = {
    getConsumptions: [
        {
            text: 'Biofuel',
            value: 'biofuel'
        },
        {
            text: 'Biomass',
            value: 'biomass'
        },
        {
            text: 'Geothermal',
            value: 'geothermal'
        },
        {
            text: 'Hydro',
            value: 'hydro'
        },
        {
            text: 'Solar',
            value: 'solar'
        },
        {
            text: 'Wind',
            value: 'wind'
        },
        {
            text: 'Petrolium',
            value: 'petrol'
        },
        {
            text: 'Coal',
            value: 'coal'
        },
        {
            text: 'Fossil Fuels',
            value: 'fossil_fuels'
        },
        {
            text: 'Natural Gas',
            value: 'natural_gas'
        },
        {
            text: 'Nuclear',
            value: 'nuclear'
        },
        {
            text: 'Propane',
            value: 'propane'
        },
        {
            text: 'Total',
            value: 'total'
        },
    ],
    getProductions: [
        {
            text: 'Biofuel',
            value: 'biofuel'
        },
        {
            text: 'Biomass',
            value: 'biomass'
        },
        {
            text: 'Geothermal',
            value: 'geothermal'
        },
        {
            text: 'Hydro',
            value: 'hydro'
        },
        {
            text: 'Solar',
            value: 'solar'
        },
        {
            text: 'Wind',
            value: 'wind'
        },
        {
            text: 'Non-Combustible',
            value: 'non-combustible'
        },
        {
            text: 'Pertolium',
            value: 'petrol'
        },
        {
            text: 'Coal',
            value: 'coal'
        },
        {
            text: 'Fossil Fuels',
            value: 'fossil-fuels'
        },
        {
            text: 'Natural Gas',
            value: 'natural_gas'
        },
        {
            text: 'Nuclear',
            value: 'nuclear'
        },
        {
            text: 'Propane',
            value: 'propane'
        },
        {
            text: 'Total',
            value: 'total'
        },
    ],
    getEmissions: [
        {
            text: 'CO2 Emission',
            value: 'c02'
        },
    ],
    getRenewableConsumptions: [
        {
            text: 'Biofuel',
            value: 'biofuel'
        },
        {
            text: 'Biomass',
            value: 'biomass'
        },
        {
            text: 'Geothermal',
            value: 'geothermal'
        },
        {
            text: 'Hydro',
            value: 'hydro'
        },
        {
            text: 'Solar',
            value: 'solar'
        },
        {
            text: 'Wind',
            value: 'wind'
        },
        {
            text: 'Total',
            value: 'total'
        },
    ],
    getRenewableProductions: [
        {
            text: 'Biofuel',
            value: 'biofuel'
        },
        {
            text: 'Biomass',
            value: 'biomass'
        },
        {
            text: 'Geothermal',
            value: 'geothermal'
        },
        {
            text: 'Hydro',
            value: 'hydro'
        },
        {
            text: 'Solar',
            value: 'solar'
        },
        {
            text: 'Wind',
            value: 'wind'
        },
        {
            text: 'Non-Combustible',
            value: 'non-combustible'
        },
        {
            text: 'Total',
            value: 'total'
        },
    ],
    getNonRenewableConsumptions: [
        {
            text: 'Petrolium',
            value: 'petrol'
        },
        {
            text: 'Coal',
            value: 'coal'
        },
        {
            text: 'Fossil Fuels',
            value: 'fossil_fuels'
        },
        {
            text: 'Natural Gas',
            value: 'natural_gas'
        },
        {
            text: 'Nuclear',
            value: 'nuclear'
        },
        {
            text: 'Propane',
            value: 'propane'
        },
        {
            text: 'Total',
            value: 'total'
        },
    ],
    getNonRenewableProductions: [
        {
            text: 'Petrolium',
            value: 'petrol'
        },
        {
            text: 'Coal',
            value: 'coal'
        },
        {
            text: 'Fossil Fuels',
            value: 'fossil_fuels'
        },
        {
            text: 'Natural Gas',
            value: 'natural_gas'
        },
        {
            text: 'Nuclear',
            value: 'nuclear'
        },
        {
            text: 'Propane',
            value: 'propane'
        },
        {
            text: 'Total',
            value: 'total'
        },
    ]
}

export let yearOptions = {
    getConsumptions: getYears(1960, 2018),
    getProductions: getYears(1960,2018),
    getEmissions: getYears(1980,2017),
    getRenewableConsumptions: getYears(1960, 2018),
    getRenewableProductions: getYears(1960, 2018),
    getNonRenewableConsumptions: getYears(1960, 2018),
    getNonRenewableProductions: getYears(1960, 2018)
}

function getYears(start, end){
    let result = [];
    for(let i = start; i <= end; i++){
        result.push({
            text: i,
            value: i
        })
    }
    return result;
}


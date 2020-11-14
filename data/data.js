{
    "city": {
        "id": 32,
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -122.67621,
                45.52345
            ]
        },
        "properties": {
            "proximity": {
                "ocean": false
            },
            "name": "Portland",
            "admin": "OR",
            "population": 632309,
            "datasets": [
                "LOCA",
                "NEX-GDDP"
            ],
            "region": 27
        }
    },
    "dataset": "NEX-GDDP",
    "scenario": "historical",
    "indicator": {
        "name": "average_high_temperature",
        "label": "Average High Temperature",
        "description": "Aggregated average high temperature, generated from daily data using all requested models",
        "valid_aggregations": [
            "yearly",
            "quarterly",
            "monthly",
            "offset_yearly",
            "custom"
        ],
        "variables": [
            "tasmax"
        ],
        "available_units": [
            "F",
            "C",
            "K"
        ],
        "default_units": "F",
        "parameters": [
            {
                "name": "agg",
                "description": "A list of comma separated aggregation types to return. Valid choices are 'min', 'max', 'avg', 'median', 'stddev', 'stdev', and 'XXth'. If using 'XXth', replace the XX with a number between 1-99 to return that percentile. For example, '99th' returns the value of the 99th percentile. The 'XXth' option can be provided multiple times with different values. 'stdev' is an alias to 'stddev'. Defaults to 'min,max,avg'.",
                "required": false,
                "default": "min,max,avg"
            },
            {
                "name": "custom_time_agg",
                "description": "Used in conjunction with the 'custom' time_aggregation value. A list of comma separated month-day pairs defining the time intervals to aggregate within. Data points will only be assigned to one aggregation, and for overlapping intervals the interval defined first will take precedence. Dates are formmatted MM-DD and pairs are formatted 'start:end'. Examples: '3-1:5-31', '1-1:6-30,7-1:12-31'",
                "required": false
            },
            {
                "name": "dataset",
                "description": "A single value defining which provider to use for raw climate data. If not provided, defaults to NEX-GDDP.",
                "required": false,
                "default": "NEX-GDDP"
            },
            {
                "name": "models",
                "description": "A list of comma separated model names to filter the indicator by. The indicator values in the response will only use the selected models. If not provided, defaults to all models.",
                "required": false,
                "default": "all"
            },
            {
                "name": "time_aggregation",
                "description": "Time granularity to group data by for result structure. Valid aggregations depend on indicator. Can be 'yearly', 'offset_yearly', 'quarterly', 'monthly', or 'custom'. Defaults to 'yearly'. If 'custom', 'custom_time_agg' parameter must be set.",
                "required": false,
                "default": "yearly"
            },
            {
                "name": "units",
                "description": "Units in which to return the data. Defaults to Imperial units (Fahrenheit for temperature indicators and inches for precipitation).",
                "required": false,
                "default": "F"
            },
            {
                "name": "years",
                "description": "A list of comma separated year ranges to filter the response by. Defaults to all years available. A year range is of the form 'start[:end]'. Examples: '2010', '2010:2020', '2010:2020,2030', '2010:2020,2030:2040'",
                "required": false,
                "default": "all"
            }
        ]
    },
    "climate_models": [
        "ACCESS1-0",
        "bcc-csm1-1",
        "BNU-ESM",
        "CanESM2",
        "CCSM4",
        "CESM1-BGC",
        "CNRM-CM5",
        "CSIRO-Mk3-6-0",
        "GFDL-CM3",
        "GFDL-ESM2G",
        "GFDL-ESM2M",
        "inmcm4",
        "IPSL-CM5A-LR",
        "IPSL-CM5A-MR",
        "MIROC5",
        "MIROC-ESM",
        "MIROC-ESM-CHEM",
        "MPI-ESM-LR",
        "MPI-ESM-MR",
        "MRI-CGCM3",
        "NorESM1-M"
    ],
    "time_aggregation": "yearly",
    "units": "F",
    "data": {
        "2004": {
            "max": 65.9481482100813,
            "min": 61.70657990756101,
            "avg": 64.50917053723921
        },
        "2005": {
            "max": 65.97967535985657,
            "min": 61.97214745090431,
            "avg": 64.65332512603578
        }
    }
}
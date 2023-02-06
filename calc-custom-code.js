	const request = new XMLHttpRequest()
    const url = 'https://stg-api.strideup.co/affordability/application/evaluation'
	const apiKey = 'VtTdiqgjl64ceL5PzPPzrxMsldaSfh!11mYSfmMY6mw783nZCFzIME5WwzQWe5ywgQStCTVFyeX!QN3FRQM2_cjbdRtZb.Lqg9kP3NKtEKnlvA9!'

function makeRequest() {
    const financingAmount = +document.getElementById("financingAmountInput").value
    const productId = document.getElementById("productIDDropdown").value
    const termInMonths = +document.getElementById("termInput").value * 12
    const deposit = +document.getElementById("priceInput").value - financingAmount
    const purchaseRegion = document.getElementById("regionDropdown").value
    const dependentsOver = +document.getElementById("dependentsOver").value
    const dependentsUnder = +document.getElementById("dependentsUnder").value
    const creditCardBalance = +document.getElementById("creditCardInput").value
    const unsecuredLoansMonthlyPaymentOnSpotDate = +document.getElementById("unsecuredLoanInput").value + +document.getElementById("studentLoanInput").value
    const unsecuredLoansMonthlyPaymentOnRevertDate = +document.getElementById("studentLoanInput").value
    const securedLoansMonthlyPayment = +document.getElementById("securedLoanInput").value
    const childcare = +document.getElementById("childcareInput").value
    const csaMaintenance = +document.getElementById("maintenanceInput").value
    const travel = +document.getElementById("travelInput").value
    const isJointApplication = JSON.parse(document.querySelector("input[name=isJoint]:checked").value)
    
    const employmentType1 = document.querySelector("input[name=employmentTypeApp1]:checked").value
    const timeTrading1 = +document.getElementById("timeTradingContract1").value + +document.getElementById("timeTradingDirector1").value + +document.getElementById("timeTradingSelfEmp1").value
    const remainingContract1 = +document.getElementById("remainingContract1").value
    const netTaxableIncomeMostRecentYear1 = +document.getElementById("netTaxContractor1").value + +document.getElementById("netTaxableSelfEmp1").value
    const netTaxableIncomePriorYear1 = +document.getElementById("netTaxContractorPrior1").value + +document.getElementById("netTaxSelfEmpPrior1").value
    const dividendsPriorYear1 = +document.getElementById("dividendsPrior1").value
    const salaryPriorYear1 = +document.getElementById("salaryPriorYear1").value
    const dividendsMostRecentYear1 = +document.getElementById("dividendsMostRecentYear1").value
    const salaryMostRecentYear1 = +document.getElementById("salaryMostRecentYear1").value
    const timeInJob1 = +document.getElementById("timeInJob1").value
    const basicIncome1 = +document.getElementById("basicIncome1").value
    const bonus1 = +document.getElementById("bonus1").value
    const overtime1 = +document.getElementById("overtime1").value
    const commission1 = +document.getElementById("commission1").value
    const maintenanceIncome1 = +document.getElementById("maintenanceIncome1").value
    const rentalIncome1 = +document.getElementById("rentalIncome1").value
    const pensionIncome1 = +document.getElementById("pensionIncome1").value

    const employmentType2 = document.querySelector("input[name=employmentTypeApp2]:checked").value
    const timeTrading2 = +document.getElementById("timeTradingContract2").value + +document.getElementById("timeTradingDirector2").value + +document.getElementById("timeTradingSelfEmp2").value
    const remainingContract2 = +document.getElementById("remainingContract2").value
    const netTaxableIncomeMostRecentYear2 = +document.getElementById("netTaxContractor2").value + +document.getElementById("netTaxableSelfEmp2").value
    const netTaxableIncomePriorYear2 = +document.getElementById("netTaxContractorPrior2").value + +document.getElementById("netTaxSelfEmpPrior2").value
    const dividendsPriorYear2 = +document.getElementById("dividendsPrior2").value
    const salaryPriorYear2 = +document.getElementById("salaryPriorYear2").value
    const dividendsMostRecentYear2 = +document.getElementById("dividendsMostRecentYear2").value
    const salaryMostRecentYear2 = +document.getElementById("salaryMostRecentYear2").value
    const timeInJob2 = +document.getElementById("timeInJob2").value
    const basicIncome2 = +document.getElementById("basicIncome2").value
    const bonus2 = +document.getElementById("bonus2").value
    const overtime2 = +document.getElementById("overtime2").value
    const commission2 = +document.getElementById("commission2").value
    const maintenanceIncome2 = +document.getElementById("maintenanceIncome2").value
    const rentalIncome2 = +document.getElementById("rentalIncome2").value
    const pensionIncome2 = +document.getElementById("pensionIncome2").value
   
    const workingTaxCredit = +document.getElementById("workingTaxCredit1").value + +document.getElementById("workingTaxCredit2").value
    const personalIndependencePayment = +document.getElementById("personalIndependencePayment1").value + +document.getElementById("personalIndependencePayment2").value
    const childBenefit = +document.getElementById("childBenefit1").value + +document.getElementById("childBenefit2").value


    const body = {
            "affordabilitySpecificInputs": {
                "productId": productId,
                "termInMonths": termInMonths,
                "financingAmount": financingAmount,
                "isAddingProductFees": false
            },
            "creditCommitments": {
                "creditCardBalance": creditCardBalance,
                "unsecuredLoansMonthlyPaymentOnSpotDate": unsecuredLoansMonthlyPaymentOnSpotDate,
                "unsecuredLoansMonthlyPaymentOnRevertDate": unsecuredLoansMonthlyPaymentOnRevertDate,
                "securedLoansMonthlyPaymentOnSpotDate": securedLoansMonthlyPayment,
                "securedLoansMonthlyPaymentOnRevertDate": securedLoansMonthlyPayment,
                "buyNowPayLaterMonthlyPaymentOnSpotDate": 0,
                "buyNowPayLaterMonthlyPaymentOnRevertDate": 0
            },
            "numberOfDependants13OrUnder": dependentsUnder,
            "numberOfDependantsOver13": dependentsOver,
            "declaredExpenditure": {
                "basicEssentialLiving": 500,
                "basicQualityOfLiving": 500,
                "travel": travel,
                "childcare": childcare,
                "csaMaintenance": csaMaintenance,
                "councilTax": 0,
                "other": 0
            },
            "benefitsAndCredits": {
                "workingTaxCredit": workingTaxCredit,
                "personalIndependencePayment": personalIndependencePayment,
                "industrialInjuriesDisablementBenefit": 0,
                "childTaxCredit": 0,
                "childBenefit": childBenefit
            },
            "application": {
                "purchaseRegion": purchaseRegion,
                "isRetiredHousehold": false,
                "isJointApplication": isJointApplication,
                "isMarried": false,
                "depositAmount": deposit,
                "isDIPStage": true
            },
            "applicants": [
                {
                    "isRetiringWithinTenYears": false,
                    "projectedRetirementPayeIncome": 0,
                    "isStandardResidency": true,
                    "primaryIncome": {
                        "timeInJob": timeInJob1,
                        "basicIncome": basicIncome1,
                        "employersAllowance": 0,
                        "bonus": bonus1,
                        "commission": commission1,
                        "overtime": overtime1,
                        "timeTrading": timeTrading1,
                        "salaryMostRecentYear": salaryMostRecentYear1,
                        "dividendsMostRecentYear": dividendsMostRecentYear1,
                        "salaryPriorYear": salaryPriorYear1,
                        "dividendsPriorYear": dividendsPriorYear1,
                        "netTaxableIncomeMostRecentYear": netTaxableIncomeMostRecentYear1,
                        "netTaxableIncomePriorYear": netTaxableIncomePriorYear1,
                        "timeRemainingOnContract": remainingContract1,
                        "employmentType": employmentType1,
                        "isHighRiskSector": false
                    },
                    "secondIncome": {
                        "timeInJob": 0,
                        "basicIncome": 0,
                        "employersAllowance": 0,
                        "bonus": 0,
                        "commission": 0,
                        "overtime": 0,
                        "timeTrading": 0,
                        "salaryMostRecentYear": 0,
                        "dividendsMostRecentYear": 0,
                        "salaryPriorYear": 0,
                        "dividendsPriorYear": 0,
                        "netTaxableIncomeMostRecentYear": 0,
                        "netTaxableIncomePriorYear": 0,
                        "timeRemainingOnContract": 0,
                        "employmentType": "",
                        "isHighRiskSector": false
                    },
                    "otherIncome": {
                        "pensionIncome": pensionIncome1,
                        "rentalIncome": rentalIncome1,
                        "maintenanceReceipts": maintenanceIncome1
                    }
                },
                {
                    "isRetiringWithinTenYears": false,
                    "projectedRetirementPayeIncome": 0,
                    "isStandardResidency": false,
                    "primaryIncome": {
                        "timeInJob": timeInJob2,
                        "basicIncome": basicIncome2,
                        "employersAllowance": 0,
                        "bonus": bonus2,
                        "commission": commission2,
                        "overtime": overtime2,
                        "timeTrading": timeTrading2,
                        "salaryMostRecentYear": salaryMostRecentYear2,
                        "dividendsMostRecentYear": dividendsMostRecentYear2,
                        "salaryPriorYear": salaryPriorYear2,
                        "dividendsPriorYear": dividendsPriorYear2,
                        "netTaxableIncomeMostRecentYear": netTaxableIncomeMostRecentYear2,
                        "netTaxableIncomePriorYear": netTaxableIncomePriorYear2,
                        "timeRemainingOnContract": remainingContract2,
                        "employmentType": employmentType2,
                        "isHighRiskSector": false
                    },
                    "secondIncome": {
                        "timeInJob": 0,
                        "basicIncome": 0,
                        "employersAllowance": 0,
                        "bonus": 0,
                        "commission": 0,
                        "overtime": 0,
                        "timeTrading": 0,
                        "salaryMostRecentYear": 0,
                        "dividendsMostRecentYear": 0,
                        "salaryPriorYear": 0,
                        "dividendsPriorYear": 0,
                        "netTaxableIncomeMostRecentYear": 0,
                        "netTaxableIncomePriorYear": 0,
                        "timeRemainingOnContract": 0,
                        "employmentType": "",
                        "isHighRiskSector": false
                    },
                    "otherIncome": {
                        "pensionIncome": pensionIncome2,
                        "rentalIncome": rentalIncome2,
                        "maintenanceReceipts": maintenanceIncome2
                    }
                }
            ]
    }
    console.log(body)

    fetch(url, {
        method: 'POST',
        headers: {
            'X-API-KEY': apiKey,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((data) => {
        const maxFinancing = document.getElementById("maxFinancing")
        const monthlyPayment = document.getElementById("monthlyPayment")
        maxFinancing.setHTML(data.maximumFinancingPossible)
        monthlyPayment.setHTML(data.initialMonthlyPayment)
        console.log(data)
    })
}

const button = document.getElementById("requestButton").onclick = makeRequest

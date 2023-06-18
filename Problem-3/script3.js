// Function declaration that calculates Basic Salary
function calculateNetSalary(basicSalary, benefits) {

// Constants for tax rates and thresholds
    const KRA_TAX_RATES = [
      { threshold: 0, rate: 0 },
      { threshold: 12197, rate: 10 },
      { threshold: 23885, rate: 15 },
      { threshold: 35472, rate: 20 },
      { threshold: 47059, rate: 25 },
      { threshold: 59797, rate: 30 },
      { threshold: 1000000000, rate: 35 } // Set a very high threshold for the highest rate
    ];
  
    // Variables for NHIF rates and thresholds 
    const NHIF_RATES = [
      { threshold: 0, rate: 0 },
      { threshold: 6000, rate: 150 },
      { threshold: 8000, rate: 300 },
      { threshold: 12000, rate: 400 },
      { threshold: 15000, rate: 500 },
      { threshold: 20000, rate: 600 },
      { threshold: 25000, rate: 750 },
      { threshold: 30000, rate: 850 },
      { threshold: 35000, rate: 900 },
      { threshold: 40000, rate: 950 },
      { threshold: 45000, rate: 1000 },
      { threshold: 50000, rate: 1100 },
      { threshold: 60000, rate: 1200 },
      { threshold: 70000, rate: 1300 },
      { threshold: 80000, rate: 1400 },
      { threshold: 90000, rate: 1500 },
      { threshold: 1000000000, rate: 1700 } // Set a very high threshold for the highest rate
    ];
  
    const NSSF_EMPLOYEE_RATE = 0.06;
    const NSSF_EMPLOYER_RATE = 0.06;
  
    // Calculate Payee Tax
    let taxableIncome = basicSalary + benefits;
    let payeeTax = 0;
  
    // 
    for (let i = 1; i < KRA_TAX_RATES.length; i++) {
      if (taxableIncome <= KRA_TAX_RATES[i].threshold) {
        payeeTax += (taxableIncome - KRA_TAX_RATES[i - 1].threshold) * (KRA_TAX_RATES[i].rate / 100);
        break;
      } else {
        payeeTax += (KRA_TAX_RATES[i].threshold - KRA_TAX_RATES[i - 1].threshold) * (KRA_TAX_RATES[i].rate / 100);
      }
    }
  
    // Calculate NHIF deduction
    let nhifDeduction = 0;
  
    for (let i = 1; i < NHIF_RATES.length; i++) {
      if (taxableIncome <= NHIF_RATES[i].threshold) {
        nhifDeduction = NHIF_RATES[i].rate;
        break;
      }
    }
  
    // Calculate NSSF deduction
    let nssfDeduction = (basicSalary + benefits) * NSSF_EMPLOYEE_RATE;
  
    // Calculate net salary
    let netSalary = basicSalary + benefits - payeeTax - nhifDeduction - nssfDeduction;
  
    // Return the calculated values
    return {
      payeeTax: payeeTax.toFixed(2),
      nhifDeduction: nhifDeduction.toFixed(2),
      nssfDeduction: nssfDeduction.toFixed(2),
      netSalary: netSalary.toFixed(2)
    };
  }
  
  // Example usage
  let basicSalary = 50000;
  let benefits = 10000;
  
  let salaryDetails = calculateNetSalary(basicSalary, benefits);
  
  // Displays corresponding values of Payee Tax, NHIF Deduction, NSSF Deduction and Net salary
  console.log("Payee Tax: " + salaryDetails.payeeTax);
  console.log("NHIF Deduction: " + salaryDetails.nhifDeduction);
  console.log("NSSF Deduction: " + salaryDetails.nssfDeduction);
  console.log("Net Salary: " + salaryDetails.netSalary);
  
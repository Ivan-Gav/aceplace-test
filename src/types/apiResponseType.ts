// export type CompanyType = {
//   value: string | null
//   unrestricted_value?: string | null
//   data: {
//     kpp?: string | null
//     capital?: {
//       type?: string | null
//       value?: number | null
//     }
//     management?: {
//       name?: string | null
//       post?: string | null
//       disqualified?: string | null
//     }
//     founders?: Array<{
//       ogrn?: string | null
//       inn?: string | null
//       name?: string | null
//       hid?: string | null
//       type?: string | null
//       share?: {
//         value?: number | null
//         type?: string | null
//       }
//     }>
//     managers?: Array<{
//       inn?: string | null
//       fio?: {
//         surname?: string | null
//         name?: string | null
//         patronymic?: string | null
//         gender?: string | null
//         source?: string | null
//         qc?: string | null
//       }
//       post?: string | null
//       hid?: string | null
//       type?: string | null
//     }>
//     predecessors?: string | null
//     successors?: string | null
//     branch_type?: string | null
//     branch_count?: number | null
//     source?: string | null
//     qc?: string | null
//     hid?: string | null
//     type?: string | null
//     state?: {
//       status?: string | null
//       code?: string | null
//       actuality_date?: number | null
//       registration_date?: number | null
//       liquidation_date?: string | null
//     }
//     opf?: {
//       type?: string | null
//       code?: string | null
//       full?: string | null
//       short?: string | null
//     }
//     name?: {
//       full_with_opf?: string | null
//       short_with_opf?: string | null
//       latin?: string | null
//       full?: string | null
//       short?: string | null
//     }
//     inn: string | null
//     ogrn?: string | null
//     okpo?: string | null
//     okato?: string | null
//     oktmo?: string | null
//     okogu?: string | null
//     okfs?: string | null
//     okved?: string | null
//     okveds?: Array<{
//       main?: boolean
//       type?: string | null
//       code?: string | null
//       name?: string | null
//     }>
//     authorities?: {
//       fts_registration?: {
//         type?: string | null
//         code?: string | null
//         name?: string | null
//         address?: string | null
//       }
//       fts_report?: {
//         type?: string | null
//         code?: string | null
//         name?: string | null
//         address?: string | null
//       }
//       pf?: {
//         type?: string | null
//         code?: string | null
//         name?: string | null
//         address?: string | null
//       }
//       sif?: {
//         type?: string | null
//         code?: string | null
//         name?: string | null
//         address?: string | null
//       }
//     }
//     documents?: {
//       fts_registration?: {
//         type?: string | null
//         series?: string | null
//         number?: string | null
//         issue_date?: number | null
//         issue_authority?: string | null
//       }
//       fts_report?: {
//         type?: string | null
//         series?: string | null
//         number?: string | null
//         issue_date?: number | null
//         issue_authority?: string | null
//       }
//       pf_registration?: {
//         type?: string | null
//         series?: string | null
//         number?: string | null
//         issue_date?: number | null
//         issue_authority?: string | null
//       }
//       sif_registration?: {
//         type?: string | null
//         series?: string | null
//         number?: string | null
//         issue_date?: number | null
//         issue_authority?: string | null
//       }
//       smb?: {
//         category?: string | null
//         type?: string | null
//         series?: string | null
//         number?: string | null
//         issue_date?: number | null
//         issue_authority?: string | null
//       }
//     }
//     licenses?: string | null
//     finance?: {
//       tax_system?: string | null
//       income?: number | null
//       expense?: number | null
//       revenue?: number | null
//       debt?: string | null
//       penalty?: string | null
//       year?: number | null
//     }
//     address?: {
//       value?: string | null
//       unrestricted_value?: string | null
//       data?: string | null
//     }
//     phones?: Array<{
//       value?: string | null
//       unrestricted_value?: string | null
//       data?: {
//         contact?: string | null
//         source?: string | null
//         qc?: string | null
//         type?: string | null
//         number?: string | null
//         extension?: string | null
//         provider?: string | null
//         country?: string | null
//         region?: string | null
//         city?: string | null
//         timezone?: string | null
//         country_code?: string | null
//         city_code?: string | null
//         qc_conflict?: string | null
//       }
//     }>
//     emails?: Array<{
//       value?: string | null
//       unrestricted_value?: string | null
//       data?: {
//         local?: string | null
//         domain?: string | null
//         type?: string | null
//         source?: string | null
//         qc?: string | null
//       }
//     }>
//     ogrn_date?: number | null
//     okved_type?: string | null
//     employee_count?: number | null
//   }
// }

export type CompanyType = {
  value: string 
  unrestricted_value?: string 
  data: {
    kpp?: string 
    capital?: {
      type?: string 
      value?: number 
    }
    management?: {
      name?: string 
      post?: string 
      disqualified?: string 
    }
    founders?: Array<{
      ogrn?: string 
      inn?: string 
      name?: string 
      hid?: string 
      type?: string 
      share?: {
        value?: number 
        type?: string 
      }
    }>
    managers?: Array<{
      inn?: string 
      fio?: {
        surname?: string 
        name?: string 
        patronymic?: string 
        gender?: string 
        source?: string 
        qc?: string 
      }
      post?: string 
      hid?: string 
      type?: string 
    }>
    predecessors?: string 
    successors?: string 
    branch_type?: string 
    branch_count?: number 
    source?: string 
    qc?: string 
    hid?: string 
    type?: 'LEGAL' | 'INDIVIDUAL'
    state?: {
      status?: string 
      code?: string 
      actuality_date?: number 
      registration_date?: number 
      liquidation_date?: string 
    }
    opf?: {
      type?: string 
      code?: string 
      full?: string 
      short?: string 
    }
    name?: {
      full_with_opf?: string 
      short_with_opf?: string 
      latin?: string 
      full?: string 
      short?: string 
    }
    inn: string 
    ogrn?: string 
    okpo?: string 
    okato?: string 
    oktmo?: string 
    okogu?: string 
    okfs?: string 
    okved?: string 
    okveds?: Array<{
      main?: boolean
      type?: string 
      code?: string 
      name?: string 
    }>
    authorities?: {
      fts_registration?: {
        type?: string 
        code?: string 
        name?: string 
        address?: string 
      }
      fts_report?: {
        type?: string 
        code?: string 
        name?: string 
        address?: string 
      }
      pf?: {
        type?: string 
        code?: string 
        name?: string 
        address?: string 
      }
      sif?: {
        type?: string 
        code?: string 
        name?: string 
        address?: string 
      }
    }
    documents?: {
      fts_registration?: {
        type?: string 
        series?: string 
        number?: string 
        issue_date?: number 
        issue_authority?: string 
      }
      fts_report?: {
        type?: string 
        series?: string 
        number?: string 
        issue_date?: number 
        issue_authority?: string 
      }
      pf_registration?: {
        type?: string 
        series?: string 
        number?: string 
        issue_date?: number 
        issue_authority?: string 
      }
      sif_registration?: {
        type?: string 
        series?: string 
        number?: string 
        issue_date?: number 
        issue_authority?: string 
      }
      smb?: {
        category?: string 
        type?: string 
        series?: string 
        number?: string 
        issue_date?: number 
        issue_authority?: string 
      }
    }
    licenses?: string 
    finance?: {
      tax_system?: string 
      income?: number 
      expense?: number 
      revenue?: number 
      debt?: string 
      penalty?: string 
      year?: number 
    }
    address?: {
      value?: string 
      unrestricted_value?: string 
      data?: string 
    }
    phones?: Array<{
      value?: string 
      unrestricted_value?: string 
      data?: {
        contact?: string 
        source?: string 
        qc?: string 
        type?: string 
        number?: string 
        extension?: string 
        provider?: string 
        country?: string 
        region?: string 
        city?: string 
        timezone?: string 
        country_code?: string 
        city_code?: string 
        qc_conflict?: string 
      }
    }>
    emails?: Array<{
      value?: string 
      unrestricted_value?: string 
      data?: {
        local?: string 
        domain?: string 
        type?: string 
        source?: string 
        qc?: string 
      }
    }>
    ogrn_date?: number 
    okved_type?: string 
    employee_count?: number 
  }
}

export type ApiResponseType = {
  suggestions?: CompanyType[];
}

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

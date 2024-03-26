type ManagedAccountFields = {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export interface ModalAccountFormProps {
  managedEstablishment?: ManagedAccountFields
}

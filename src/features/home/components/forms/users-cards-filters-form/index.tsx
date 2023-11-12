'use client'

import { Button, Flex, Text } from '@radix-ui/themes'
import { Checkbox } from '@/shadcn-components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shadcn-components/ui/form'
import { Input } from '@/shadcn-components/ui/input'
import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { actionFetchAppearances } from '@/common/actions/master-data/fetch-appearances'
import { actionFetchServices } from '@/common/actions/master-data/fetch-services'
import { appearances, services } from '@/common/signals/master-data'
import { Combobox } from '@/common/components/ui/primitives/combobox'
import { TUsersFilters } from '@/features/home/signals/users-filters'

export const DEFAULT_VALUES: TUsersFilters = {
  nameUsername: '',
  appearance: [],
  services: [],
  withVideo: false,
  hasPromo: false,
}

export type TFilterFormProps = {
  onSubmit?: (data: TUsersFilters) => void
  defaultValues?: TUsersFilters
}

export const UsersCardsFiltersForm = ({
  onSubmit,
  defaultValues = { ...DEFAULT_VALUES },
}: TFilterFormProps) => {
  const form = useForm<TUsersFilters>({
    defaultValues,
  })

  async function fetchMasters() {
    const res = await Promise.all([actionFetchAppearances(), actionFetchServices()])

    if (res[0].status === 'success') {
      appearances.value = res[0].data.map(({ name, value }) => ({ label: name, value }))
    }

    if (res[1].status === 'success') {
      services.value = res[1].data.map(({ name, value }) => ({ label: name, value }))
    }
  }

  const handleSubmit: SubmitHandler<TUsersFilters> = (data) => onSubmit?.(data)

  useEffect(() => {
    fetchMasters()
  }, [])

  return (
    <Form {...form}>
      <Flex className="mt-5" direction="column" gap="5" asChild>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="nameUsername"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="rounded-full" placeholder="Nombre / @usuario" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="appearance"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Combobox
                    btnClassName="w-full"
                    onChange={(values) => form.setValue('appearance', values)}
                    options={appearances.value}
                    triggerPlaceholder="Apariencia"
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Combobox
                    btnClassName="w-full"
                    onChange={(values) => form.setValue('services', values)}
                    options={services.value}
                    triggerPlaceholder="Servicios"
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Flex className="rounded-md bg-gray-100 dark:bg-gray-900 " gap="4" p="3">
            <FormField
              control={form.control}
              name="withVideo"
              render={({ field }) => (
                <Flex className="space-y-0" gap="2" align="center" asChild>
                  <FormItem>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>
                      <Text>Con video</Text>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                </Flex>
              )}
            />

            <FormField
              control={form.control}
              name="hasPromo"
              render={({ field }) => (
                <Flex className="space-y-0" gap="2" align="center" asChild>
                  <FormItem>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>
                      <Text>En promoción</Text>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                </Flex>
              )}
            />
          </Flex>

          <Flex justify="between">
            <Button
              variant="surface"
              size="3"
              type="reset"
              onClick={() =>
                form.reset({
                  ...DEFAULT_VALUES,
                })
              }
            >
              Limpiar
            </Button>
            <Button variant="surface" color="crimson" size="3" type="submit">
              Aplicar cambios
            </Button>
          </Flex>
        </form>
      </Flex>
    </Form>
  )
}

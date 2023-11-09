'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Flex } from '@radix-ui/themes'

import { Checkbox } from '@/shadcn-components/ui/checkbox'
import { Combobox } from '@/common/components/ui/primitives/combobox'
import { Input } from '@/shadcn-components/ui/input'
import { TUsersFilters } from '../../signals/users-filters'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shadcn-components/ui/form'

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

export const FilterForm = ({
  onSubmit,
  defaultValues = { ...DEFAULT_VALUES },
}: TFilterFormProps) => {
  const form = useForm<TUsersFilters>({
    defaultValues,
  })

  const handleSubmit: SubmitHandler<TUsersFilters> = (data) => onSubmit?.(data)

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
                    triggerPlaceholder="Apariencia"
                    onChange={(values) => form.setValue('appearance', values)}
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
                    triggerPlaceholder="Servicios"
                    onChange={(values) => form.setValue('services', values)}
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
                <FormItem className="flex flex-row items-center gap-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>Con video</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hasPromo"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>En promoción</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Flex>

          <Flex justify="between">
            <Button variant="surface" size="3" type="reset">
              Limpiar
            </Button>
            <Button variant="surface" color="crimson" size="3" type="submit">
              Aplicar filtros
            </Button>
          </Flex>
        </form>
      </Flex>
    </Form>
  )
}

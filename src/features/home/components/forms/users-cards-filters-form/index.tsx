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
import { Combobox as ComboboxClient } from '@/common/components/ui/primitives/combobox'
import { DEFAULT_VALUES, UsersCardsFilters } from '../../../store/user-cards-filters'
import { masterDataActions, useMasterDataStore } from '@/common/store/mater-data'
import { LabeledSlider } from '@/common/components/ui/primitives/labeled-slider'
import { useIsFirstRender } from '@/common/hooks/is-first-render'
import { withIntlClientProvider } from '@/common/hocs/with-intl-client-provider'

const Combobox = withIntlClientProvider(ComboboxClient, 'Combobox')

export type UsersCardsFiltersFormProps = {
  containerProps?: Omit<React.ComponentProps<typeof Flex>, 'children'>
  defaultValues?: UsersCardsFilters
  onSubmit?: (data: UsersCardsFilters) => void
}

export const UsersCardsFiltersForm = ({
  containerProps,
  onSubmit,
  defaultValues = { ...DEFAULT_VALUES },
}: UsersCardsFiltersFormProps) => {
  const form = useForm<UsersCardsFilters>({
    defaultValues,
  })
  const appearances = useMasterDataStore((state) => state.appearances)
  const services = useMasterDataStore((state) => state.services)
  const isFirstRender = useIsFirstRender()

  async function fetchMasterData() {
    const res = await Promise.all([actionFetchAppearances(), actionFetchServices()])

    if (res[0].status === 'success')
      masterDataActions.setAppearances(
        res[0].data.map(({ name, value }) => ({ label: name, value }))
      )

    if (res[1].status === 'success')
      masterDataActions.setServices(res[1].data.map(({ name, value }) => ({ label: name, value })))
  }

  const handleSubmit: SubmitHandler<UsersCardsFilters> = (data) => onSubmit?.(data)

  useEffect(() => {
    if (isFirstRender) fetchMasterData()
  }, [isFirstRender])

  return (
    <Form {...form}>
      <Flex direction="column" gap="5" asChild {...containerProps}>
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
                    options={appearances}
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
                    options={services}
                    triggerPlaceholder="Servicios"
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Flex className="rounded-md bg-gray-100 dark:bg-gray-900" gap="4" p="3">
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

          <LabeledSlider
            defaultValue={[50000, 500000]}
            onValueCommit={(value) => console.log({ value })}
            min={50000}
            max={500000}
            step={10000}
          />

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
            <Button variant="solid" color="crimson" size="3" type="submit">
              Aplicar cambios
            </Button>
          </Flex>
        </form>
      </Flex>
    </Form>
  )
}

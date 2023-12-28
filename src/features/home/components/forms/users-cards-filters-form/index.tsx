'use client'

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
import { useForm, SubmitHandler } from 'react-hook-form'
import { throttle } from 'lodash'
import { useCallback } from 'react'

import { actionFetchAppearances } from '@/common/actions/master-data/fetch-appearances'
import { actionFetchServices } from '@/common/actions/master-data/fetch-services'
import { actionFetchNationalities } from '@/common/actions/master-data/fetch-nationalities'
import { Button } from '@/common/components/primitives/button'
import { Combobox } from '@/common/components/ui/primitives/combobox'
import { DEFAULT_VALUES, UsersCardsFilters } from '../../../store/user-cards-filters'
import { EscortType } from '@//common/types/entities/misc/escort.type'
import { LabeledSlider } from '@/common/components/ui/primitives/labeled-slider'
import { masterDataActions, useMasterDataStore } from '@/common/store/mater-data'
import { stringToMenuOption } from '@/common/mappers/string-to-select-option'
import { useEffectOnce } from '@/common/hooks/use-effect-once'

const USER_TYPES: EscortType[] = ['VIP', 'PREMIUM', 'GOLD']

export type UsersCardsFiltersFormProps = {
  containerProps?: Omit<React.ComponentProps<'form'>, 'children'>
  defaultValues?: UsersCardsFilters
  onSubmit?: (data: UsersCardsFilters) => void
  values?: UsersCardsFilters
}

export const UsersCardsFiltersForm = ({
  containerProps,
  onSubmit,
  values,
  defaultValues = { ...DEFAULT_VALUES },
}: UsersCardsFiltersFormProps) => {
  const form = useForm<UsersCardsFilters>({
    defaultValues,
    values,
  })
  const appearances = useMasterDataStore((state) => state.appearances)
  const nationalities = useMasterDataStore((state) => state.nationalities)
  const services = useMasterDataStore((state) => state.services)

  const handleSubmit: SubmitHandler<UsersCardsFilters> = (data) => onSubmit?.(data)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMasterData = useCallback(
    throttle(async () => {
      const res = await Promise.all([
        actionFetchAppearances(),
        actionFetchServices(),
        actionFetchNationalities(),
      ])

      if (res[0].status === 'success')
        masterDataActions.setAppearances(
          res[0].data.map(({ name, value }) => ({ label: name, value }))
        )

      if (res[1].status === 'success')
        masterDataActions.setServices(
          res[1].data.map(({ name, value }) => ({ label: name, value }))
        )

      if (res[2].status === 'success')
        masterDataActions.setNationalities(res[2].data.map(stringToMenuOption))
    }, 100),
    []
  )

  useEffectOnce(() => {
    fetchMasterData()
  })

  return (
    <Form {...form}>
      <form
        {...containerProps}
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="nameUsername"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-full border border-gray-200 bg-shade-50/60 font-normal text-gray-950 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-shade-950/60 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  placeholder="Nombre / @usuario"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Combobox
                  btnClassName="w-full"
                  onChange={(values) => form.setValue('type', values as EscortType[])}
                  options={USER_TYPES.map(stringToMenuOption)}
                  triggerPlaceholder="Categoria"
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LabeledSlider
          defaultValue={[18, 99]}
          onValueCommit={(value) => console.log({ value })}
          min={18}
          max={99}
          step={1}
        />

        <FormField
          control={form.control}
          name="nationalities"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Combobox
                  btnClassName="w-full"
                  onChange={(values) => form.setValue('nationalities', values)}
                  options={nationalities}
                  triggerPlaceholder="Nacionalidad"
                  value={field.value}
                />
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

        <div className="flex gap-4 rounded-md bg-shade-100 p-2 dark:bg-shade-900">
          <FormField
            control={form.control}
            name="hasPromo"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>
                  <p>En promoción</p>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="withVideo"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>
                  <p>Con video</p>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <LabeledSlider
          defaultValue={[50000, 500000]}
          onValueCommit={(value) => console.log({ value })}
          min={50000}
          max={500000}
          step={10000}
        />

        <div className="flex justify-between">
          <Button
            type="reset"
            onClick={() =>
              form.reset({
                ...DEFAULT_VALUES,
              })
            }
          >
            Limpiar
          </Button>
          <Button type="submit">Aplicar cambios</Button>
        </div>
      </form>
    </Form>
  )
}

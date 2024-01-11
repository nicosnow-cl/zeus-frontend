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
import { useForm, SubmitHandler } from 'react-hook-form'
import { throttle } from 'lodash'
import { useCallback } from 'react'

import { actionFetchAppearances } from '@/common/actions/master-data/fetch-appearances'
import { actionFetchNationalities } from '@/common/actions/master-data/fetch-nationalities'
import { actionFetchServices } from '@/common/actions/master-data/fetch-services'
import { Button } from '@/common/components/primitives/button'

import { Combobox } from '@/common/components/primitives/combobox'
import { DEFAULT_VALUES } from '../../../store/user-cards-filters'
import { EscortType } from '@//common/types/entities/misc/escort.type'
import { Input } from '@/common/components/primitives/input'
import { LabeledSlider } from '@/common/components/primitives/labeled-slider'
import { masterDataActions, useMasterDataStore } from '@/common/store/mater-data'
import { stringToMenuOption } from '@/common/mappers/string-to-select-option'
import { useEffectOnce } from '@/common/hooks/use-effect-once'
import { UsersCardsFilters } from '@/common/repositories/users/findAll'

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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nombre / @usuario" glassmorphism {...field} />
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
                  glassmorphism
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Combobox
                  btnClassName="w-full"
                  onChange={(values) => form.setValue('nationality', values)}
                  options={nationalities}
                  triggerPlaceholder="Nacionalidad"
                  value={field.value}
                  glassmorphism
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
                  glassmorphism
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
                  glassmorphism
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <LabeledSlider
                  defaultValue={[18, 99]}
                  glassmorphism
                  label="Edad"
                  max={99}
                  min={18}
                  onValueChange={(value) => field.onChange(value)}
                  step={1}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <LabeledSlider
                  decorator="$"
                  defaultValue={[50000, 500000]}
                  glassmorphism
                  label="Tarifa"
                  max={500000}
                  min={50000}
                  onValueChange={(value) => field.onChange(value)}
                  step={10000}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="glassmorphism flex gap-4 rounded-md bg-gradient-to-l p-2">
          <FormField
            control={form.control}
            name="hasPromo"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>En promoción</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="withVideo"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0 text-base">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>Con video</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between gap-1">
          <Button type="submit" glow>
            Aplicar cambios
          </Button>

          <Button
            type="reset"
            variant="secondary"
            onClick={() =>
              form.reset({
                ...DEFAULT_VALUES,
              })
            }
          >
            Limpiar
          </Button>
        </div>
      </form>
    </Form>
  )
}

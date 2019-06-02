import {UseDatepickerProps, FormatFunction, FocusedInput} from '@datepicker-react/hooks'
import {DateRangeInputPhrases} from '../../phrases'
export interface DateRangeInputProps extends UseDatepickerProps {
  displayFormat?: string | FormatFunction
  phrases?: DateRangeInputPhrases
  onFocusChange(focusInput: FocusedInput): void
  showStartDateCalendarIcon?: boolean
  showEndDateCalendarIcon?: boolean
  onClose?(): void
  vertical?: boolean
  showResetDates?: boolean
  showSelectedDates?: boolean
  showClose?: boolean
  rtl?: boolean
  placement?: 'top' | 'bottom'
}
declare function DateRangeInput({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  firstDayOfWeek,
  onFocusChange,
  numberOfMonths,
  focusedInput,
  onDateChange,
  exactMinBookingDays,
  showClose,
  showSelectedDates,
  showResetDates,
  vertical,
  rtl,
  isDayBlocked,
  minBookingDays,
  onClose,
  showStartDateCalendarIcon,
  showEndDateCalendarIcon,
  displayFormat,
  phrases,
  placement,
}: DateRangeInputProps): JSX.Element
export default DateRangeInput

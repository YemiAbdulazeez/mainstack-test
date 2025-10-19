import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { format, startOfToday, endOfToday, subDays, startOfMonth, endOfMonth, subMonths } from 'date-fns';
import { datePresets, transactionTypes, transactionStatuses } from '../../data/constants';
import Icon from '../ui/Icon';
import { useClickOutside } from '../../hooks/useClickOutside';

// Import the required CSS for react-datepicker
import 'react-datepicker/dist/react-datepicker.css';

// Custom CSS to fix the calendar display and match the design
const calendarStyles = `

.react-datepicker-popper {
  z-index: 50 !important;
  left: 0 !important;
  transform: translateX(0) !important;
}


.react-datepicker {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  font-family: inherit; /* Inherit font from parent */
}


.react-datepicker__triangle {
  display: none;
}


.react-datepicker__header {
  background-color: transparent;
  border-bottom: none;
  padding: 0;
}


.react-datepicker__week-day {
  color: #6b7280; /* text-gray-500 */
  font-size: 0.75rem;
  font-weight: 500;
  width: 2.25rem;
  margin: 0.1rem;
}

/* --- Day Cell Styling --- */

/* Standard day cell */
.react-datepicker__day, .react-datepicker__time-name {
  width: 2.25rem;
  height: 2.25rem;
  line-height: 2.25rem;
  margin: 0.1rem;
  border-radius: 50%; /* Make it a circle */
  transition: all 0.15s ease-in-out;
  color: #1f2937; /* text-gray-900 */
  font-size: 0.875rem;
}

/* Hover effect */
.react-datepicker__day:hover {
  background-color: #f3f4f6; /* hover:bg-gray-100 */
}

/* Selected day */
.react-datepicker__day--selected {
  background-color: #1f2937 !important; /* bg-gray-900 */
  color: white !important;
  font-weight: 600;
}

/* Selected day on hover (to maintain selected style) */
.react-datepicker__day--selected:hover {
  background-color: #111827 !important; /* Slightly darker */
}

/* Range days */
.react-datepicker__day--in-range,
.react-datepicker__day--in-selecting-range {
  background-color: #f3f4f6; /* bg-gray-100 */
  border-radius: 0;
  color: #1f2937;
}

/* Start/End of the range */
.react-datepicker__day--range-start,
.react-datepicker__day--range-end {
  border-radius: 50%;
  background-color: #1f2937 !important;
  color: white !important;
}

/* Day names container */
.react-datepicker__day-names {
  margin-bottom: 0.5rem;
}

/* Week container */
.react-datepicker__week {
  display: flex;
  justify-content: space-around;
}

/* Day outside of the current month */
.react-datepicker__day--outside-month {
  color: #d1d5db; /* text-gray-300 */
}
`;


const FilterSidebar = ({ isOpen, onClose }) => {
  const [selectedTransactionTypes, setSelectedTransactionTypes] = useState(transactionTypes);
  const [selectedTransactionStatus, setSelectedTransactionStatus] = useState({
    Successful: true,
    Pending: true,
    Failed: true,
  });

  const [startDate, setStartDate] = useState(subDays(new Date(), 6));
  const [endDate, setEndDate] = useState(new Date());
  const [selectedPreset, setSelectedPreset] = useState('Last 7 days');

  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isStartDateOpen, setIsStartDateOpen] = useState(false);
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);

  const typeDropdownRef = useRef(null);
  const statusDropdownRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  useClickOutside(typeDropdownRef, () => setIsTypeDropdownOpen(false));
  useClickOutside(statusDropdownRef, () => setIsStatusDropdownOpen(false));
  useClickOutside(startDateRef, () => setIsStartDateOpen(false));
  useClickOutside(endDateRef, () => setIsEndDateOpen(false));

  const handleStatusChange = (status) => {
    setSelectedTransactionStatus(prev => ({ ...prev, [status]: !prev[status] }));
  };

  const handlePresetClick = (preset) => {
    setSelectedPreset(preset.label);
    const today = new Date();

    switch (preset.value) {
      case 'today':
        setStartDate(startOfToday());
        setEndDate(endOfToday());
        break;
      case 'last7days':
        setStartDate(subDays(today, 6));
        setEndDate(today);
        break;
      case 'thismonth':
        setStartDate(startOfMonth(today));
        setEndDate(endOfMonth(today));
        break;
      case 'last3months':
        setStartDate(startOfMonth(subMonths(today, 2)));
        setEndDate(endOfMonth(today));
        break;
      default:
        break;
    }
  };

  const typeDisplay = selectedTransactionTypes.length === transactionTypes.length
    ? "Store Transactions, Get Tipped, Withdrawals, Chargebacks, Ca..."
    : selectedTransactionTypes.join(", ");

  const statusDisplay = Object.entries(selectedTransactionStatus)
    .filter(([_, isSelected]) => isSelected)
    .map(([status]) => status)
    .join(", ");

  const CustomInput = React.forwardRef(({ value, onClick, isActive }, ref) => (
    <button
      type="button"
      className={`text-center flex justify-between items-center px-3 py-3 border border-gray-300 rounded-xl w-48 shadow-sm text-sm transition-colors ${
        isActive ? 'bg-gray-200' : 'bg-gray-200'
      }`}
      onClick={onClick}
      ref={ref}
    >
      <span className="truncate">{value || "Select date"}</span>
      <Icon
        d="M19 9l-7 7-7-7"
        className={`w-4 h-4 text-gray-400 transition-transform ${
          isActive ? "rotate-180" : ""
        }`}
      />
    </button>
  ));

  if (!isOpen) return null;

  return (
    <>
      {/* Inject Calendar Styling as requested for a single-file solution */}
      <style dangerouslySetInnerHTML={{ __html: calendarStyles }} />

      <div className="fixed inset-0 overflow-hidden z-40">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-gray-900 bg-opacity-70 transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          ></div>

          <section className="absolute inset-y-0 right-0 max-w-full flex transition-transform duration-300 transform translate-x-0">
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl">
                {/* Header */}
                <div className="p-4 lg:p-6 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Filter</h2>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Icon d="M6 18L18 6M6 6l12 12" className="h-6 w-6" />
                  </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4 lg:space-y-6">
                  {/* Date Presets */}
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {datePresets.map((preset) => (
                      <button
                        key={preset.value}
                        type="button"
                        onClick={() => handlePresetClick(preset)}
                        className={`px-3 py-3 text-xs font-medium rounded-full whitespace-nowrap ${
                          selectedPreset === preset.label
                            ? "bg-gray-900 text-white"
                            : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                        } transition-colors`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  {/* Date Range Dropdowns */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Range
                    </label>
                    <div className="flex flex-col lg:flex-row">
                      <div className="relative flex-1" ref={startDateRef}>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          // Fix 1: Pass formatted date to CustomInput for 'dd MMM yyyy' display
                          customInput={<CustomInput isActive={isStartDateOpen} value={startDate ? format(startDate, 'dd MMM yyyy') : "Select date"} />}
                          onCalendarOpen={() => {
                            setIsStartDateOpen(true);
                            setIsEndDateOpen(false);
                          }}
                         
                          onCalendarClose={() => setIsStartDateOpen(false)}
                          popperClassName="react-datepicker-popper z-50"
                          popperPlacement="bottom-start"
                          dateFormat="dd MMM yyyy" // Fix 2: Set internal date format
                          renderCustomHeader={({
                            date,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                          }) => (
                            <div className="flex justify-between  items-center px-4 py-3">
                              <button
                                type="button"
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                                className="p-1  rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Icon d="M15 19l-7-7 7-7" className="w-4 h-4 text-gray-600" />
                              </button>
                              <span className="text-sm font-semibold text-gray-900">
                                {format(date, 'MMMM yyyy')}
                              </span>
                              <button
                                type="button"
                                onClick={increaseMonth}
                                disabled={nextMonthButtonDisabled}
                                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Icon d="M9 5l7 7-7 7" className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          )}
                        />
                      </div>

                      <div className="relative flex-1" ref={endDateRef}>
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                          // Fix 1: Pass formatted date to CustomInput for 'dd MMM yyyy' display
                          customInput={<CustomInput isActive={isEndDateOpen} value={endDate ? format(endDate, 'dd MMM yyyy') : "Select date"} />}
                          onCalendarOpen={() => {
                            setIsEndDateOpen(true);
                            setIsStartDateOpen(false);
                          }}
                          onCalendarClose={() => setIsEndDateOpen(false)}
                          popperClassName="react-datepicker-popper z-50"
                          popperPlacement="bottom-start"
                          dateFormat="dd MMM yyyy" // Fix 2: Set internal date format
                          renderCustomHeader={({
                            date,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                          }) => (
                            <div className="flex justify-between items-center px-4 py-3">
                              <button
                                type="button"
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Icon d="M15 19l-7-7 7-7" className="w-4 h-4 text-gray-600" />
                              </button>
                              <span className="text-sm font-semibold text-gray-900">
                                {format(date, 'MMMM yyyy')}
                              </span>
                              <button
                                type="button"
                                onClick={increaseMonth}
                                disabled={nextMonthButtonDisabled}
                                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Icon d="M9 5l7 7-7 7" className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Transaction Type Dropdown */}
                  <div className="relative" ref={typeDropdownRef}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction Type
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                      className="w-full text-left px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-gray-200 text-sm text-gray-900 flex justify-between items-center"
                    >
                      <span className="truncate">{typeDisplay}</span>
                      <Icon
                        d="M19 9l-7 7-7-7"
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          isTypeDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isTypeDropdownOpen && (
                      <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto z-50 p-3">
                        {transactionTypes.map((type) => (
                          <div key={type} className="flex items-center py-1">
                            <input
                              type="checkbox"
                              checked={selectedTransactionTypes.includes(type)}
                              onChange={(e) => {
                                setSelectedTransactionTypes(prev =>
                                  e.target.checked
                                    ? [...prev, type]
                                    : prev.filter(t => t !== type)
                                );
                              }}
                              className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900 focus:ring-2 cursor-pointer"
                            />
                            <label className="ml-3 text-sm text-gray-700 select-none cursor-pointer">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Transaction Status Dropdown */}
                  <div className="relative" ref={statusDropdownRef}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction Status
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                      className="w-full text-left px-4 py-3 border bg-gray-200 border-gray-300 rounded-xl shadow-sm text-sm text-gray-900 flex justify-between items-center"
                    >
                      <span>{statusDisplay}</span>
                      <Icon
                        d="M19 9l-7 7-7-7"
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          isStatusDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isStatusDropdownOpen && (
                      <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto z-50 p-3">
                        {transactionStatuses.map((status) => (
                          <div key={status} className="flex items-center py-1">
                            <input
                              type="checkbox"
                              checked={selectedTransactionStatus[status]}
                              onChange={() => handleStatusChange(status)}
                              className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900 focus:ring-2 cursor-pointer"
                            />
                            <label className="ml-3 text-sm text-gray-700 select-none cursor-pointer">
                              {status}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 lg:p-6 border-t border-gray-100 flex justify-between space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTransactionTypes(transactionTypes);
                      setSelectedTransactionStatus({
                        Successful: true,
                        Pending: true,
                        Failed: true,
                      });
                      setStartDate(subDays(new Date(), 6));
                      setEndDate(new Date());
                      setSelectedPreset('Last 7 days');
                    }}
                    className="w-full px-4 py-3 text-sm font-semibold rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      console.log('Applied filters:', {
                        startDate,
                        endDate,
                        selectedTransactionTypes,
                        selectedTransactionStatus
                      });
                      onClose();
                    }}
                    className="w-full px-4 py-3 text-sm font-semibold rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
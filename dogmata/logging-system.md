# Logging System

## Principles

To be written.

## Debugging Partial

To be written.

## Configuration

To be written.

## Verbosity

Default: 5 (int)

Set `verbosity` to a value from 1 to 9 to limit or extend the amount of information that is debugged.

| Verb. | String | Notes |
| :---: | :---: | --- |
| 1 | fatal | just show the essentials (missing configuration, wrong application, etc.) |
| 2 | - | more than fatal and less than error |
| 3 | error | errors that might lead to cancellation of the script (`hugo` or `hugo server`) |
| 4 | - | more than errors and less than warnings |
| 5 | warn | warnings about missed opportunities or config options |
| 6 | - | more than warnings and less than info |
| 7 | info | default debugging that offers enough information |
| 8 | - | more than info and less than debug |
| 9 | debug | verbose like that homeless guy that's muttering in the rain about "them" |

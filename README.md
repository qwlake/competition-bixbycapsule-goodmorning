# room1431.goodmorning

`ver. 0.1.0` 사용자에게 여러가지 타이머 선택지 제시

`ver. 0.2.0` 사용자가 원하는 수면시간이나 기상시간만 받고 자동으로 최적의 타이머 반환

`ver. 0.2.1` 버그 수정 및 app-launch 기능 추가

## Use case

### 1. 목적
목표 수면시간을 만족하는 가장 빠른 취침시간과 가장 빠른 기상시간 제시 및 알람 설정

### 2. [사용자가 입력할 말들]
?시에 깨어나야 한다

### 3. [발화 변수 : Action]
SetUpDnTimers

### 4. [발화 변수 : Input Concept]
WakeupTime

### 5. [발화 변수 : Output Concept]
TimerList

********************************************************

### 1. 목적
목표 수면시간을 만족하는 가장 빠른 기상시간 제시 및 알람 설정

### 2. [사용자가 입력할 말들]
?시간 이상 자고 싶다

### 3. [발화 변수 : Action]
SetUpTimers

### 4. [발화 변수 : Input Concept]
SleepPeriod

### 5. [발화 변수 : Output Concept]
TimerList

# Summarize

##### 1. Suburban parents are more worried about their kids playing with cell phones (since they work full-time and their kids are at home)

```python
'''
So let's look at the results and see if their kids are spending a lot of time on social media.
'''
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Load data
data = pd.read_csv('pre_processed_data.csv')

# Calculate the frequency of each type of social media usage time per region
freq_data = data.groupby(['P_neighborhood', 'TS_on_socialmedia']).size().reset_index(name='Frequency')

# Create graph
plt.figure(figsize=(10, 6))
sns.barplot(x='P_neighborhood', y='Frequency', hue='TS_on_socialmedia', data=freq_data)
plt.title('Distribution of time spent on social media by region')
plt.xlabel('Area')
plt.ylabel('Frequency')
plt.legend(loc='center left', bbox_to_anchor=(1, 0.5))
plt.show()
```
![images](/spend-time%20calculate.png)

#### How old are the children in the family

```python
'''
How old is the average child?
'''
import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('pre_processed_data.csv')

# Group children by neighborhood and calculate the total number of children in each age group
grouped_data = data.groupby('P_neighborhood')[['No_of_kids_0_4', 'No_of_kids_5_11', 'No_of_kids_12_17', 'No_of_kids_above_18']].sum()

grouped_data.plot(kind='bar', stacked=True, figsize=(10, 7))

# Add title and label 
plt.title('Number of Children by Age Group and Neighborhood')
plt.xlabel('Neighborhood')
plt.ylabel('Number of Children')
plt.xticks(rotation=0)  

# Add the title
plt.legend(title='Age groups', bbox_to_anchor=(1.05, 1), loc='upper left')

# Show the list
plt.tight_layout()  
plt.show()
```
![images](/Age%20group%20of%20child.png)

###### After that we need to check those children are always at home

```python
'''
They always at home
'''
import pandas as pd
import matplotlib.pyplot as plt


data = pd.read_csv('pre_processed_data.csv')

# Number of children at home 
grouped_data = data.groupby('P_neighborhood')[['No_of_kids_at_home_0_11', 'No_of_kids_at_home_above_12']].sum()


grouped_data.plot(kind='bar', stacked=True, figsize=(10, 7))

# Add title and label 
plt.title('Number of Children at home by Age Group and Neighborhood')
plt.xlabel('Neighborhood')
plt.ylabel('Number of Children at home')
plt.xticks(rotation=0)  

# Add the title
plt.legend(title='Age groups at home', bbox_to_anchor=(1.05, 1), loc='upper left')

# Show the list
plt.tight_layout()  
plt.show()
```
![images](/check.png)

##### Their parent are most of them is full time job

```python
'''
Parent job type
'''
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
data = pd.read_csv('pre_processed_data.csv')

# Create the picture 
plt.figure(figsize=(10, 6))  
sns.histplot(data, x='P_employment_type', hue='P_neighborhood', multiple='stack')
plt.title('Distribution of Age own a phone by living area')
plt.xlabel('Parent job type')
plt.ylabel('Frequency')
plt.xticks(rotation=0, fontsize=12)  # Rotate the degree and change the word size
plt.yticks(fontsize=12)
plt.tight_layout()  
plt.show()
```
![images](/job%20type.png)

##### Can we therefore assume that most parents have full-time jobs and that most children are kept at home. This is how children spend most of their time on their cell phones.

- And the reason why I have this hypothesis is because we can observe that kids who live in the suburbs have cell phones at a much younger age

```Python
'''
Age of owning the phone 
'''
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
data = pd.read_csv('pre_processed_data.csv')

# Create the picture 
plt.figure(figsize=(10, 6))  
sns.histplot(data, x='Child_owns_smartphone_age', hue='P_neighborhood', multiple='stack')
plt.title('Distribution of Age own a phone by living area')
plt.xlabel('Age own a phone')
plt.ylabel('Frequency')
plt.xticks(rotation=0, fontsize=12)  # Rotate the degree and change the word size
plt.yticks(fontsize=12)
plt.tight_layout()  
plt.show()
```
![images](/Age%20of%20owning%20the%20phone.png)

##### We can observe again that they live in that part of the U.S.

```python
'''
Parent region
'''
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
data = pd.read_csv('pre_processed_data.csv')

# Create the picture 
plt.figure(figsize=(10, 6))  
sns.histplot(data, x='P_region', hue='P_neighborhood', multiple='stack')
plt.title('Distribution of parent region by living area')
plt.xlabel('Parent region')
plt.ylabel('Frequency')
plt.xticks(rotation=0, fontsize=12)  # Rotate the degree and change the word size
plt.yticks(fontsize=12)
plt.tight_layout()  
plt.show()
'''The South is economically depressed(or not good from history) relative to the rest of the country'''
```
![images](/living%20area.png)

##### Historically, the South is not considered economically prosperous. So parents may be neglecting their children because of their job, thus allowing children to become addicted to online socializing or video games, etc.
# Summarize

### 1. Suburban parents are more worried about their kids playing with cell phones (since they work full-time and their kids are at home)

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
![images](spend-time%20calculate.png)


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
![images](check.png)

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
![images](job%20type.png)

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
![images](Age%20of%20owning%20the%20phone.png)

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
![images](living%20area.png)

##### Historically, the South is not considered economically prosperous. So parents may be neglecting their children because of their job, thus allowing children to become addicted to online socializing or video games, etc.

### 1. Kids are more addicted on smartphone and TV
``` python
import pandas as pd
import matplotlib.pyplot as plt

# Load the CSV file
file_path = 'pre_processed_data.csv'  
data = pd.read_csv(file_path)

# Selecting and renaming the required columns
columns_of_interest = ['CHD_smartphone', 'CHD_voice_assistant', 'CHD_gaming_console', 'CHD_tablet', 'CHD_computer', 'CHD_tv']
display_column_names = {'CHD_smartphone': 'Smartphone', 'CHD_voice_assistant': 'Voice Assistant', 'CHD_gaming_console': 'Gaming Console', 'CHD_tablet': 'Tablet', 'CHD_computer': 'Computer', 'CHD_tv': 'TV'}
data_selected = data[columns_of_interest].rename(columns=display_column_names)

# Calculating the percentage of 'Yes' and 'No' for each column
percentages = {}
for col in display_column_names.values():
    counts = data_selected[col].value_counts(normalize=True)
    percentages[col] = {
        'Yes': counts.get('Yes, my child uses or interacts with this', 0) * 100,
        'No': counts.get('No, my child does not use or interact with this', 0) * 100
    }

# Creating a DataFrame for easy plotting
percentages_df = pd.DataFrame(percentages).T

# Plotting with percentage annotations
fig, ax = plt.subplots(figsize=(10, 6))
percentages_df.plot(kind='bar', stacked=True, ax=ax)

# Adding the percentage annotations
for p in ax.patches:
    width = p.get_width()
    height = p.get_height()
    x, y = p.get_xy() 
    ax.annotate(f'{height:.1f}%', (x + width/2, y + height/2), ha='center')

# Setting the plot details
plt.title('Percentage of Yes/No Responses for Different Technologies')
plt.xlabel('Technologies')
plt.ylabel('Percentage (%)')
plt.xticks(rotation=45)
plt.legend(title='Response')
plt.tight_layout()

# Show the plot
plt.show()
```
![image](last%20picture.png)
>>>>>>> Mingjia
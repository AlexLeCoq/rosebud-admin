import React from 'react';
import {
  Create,
  TextInput,
  SimpleForm,
  SelectInput,
  ReferenceInput,
  TopToolbar,
  required
} from 'react-admin';
import BackButton from '../../BackButton';

const QuestionnaireCreate = props => {
  
  return (
    <Create {...props} actions={<TopToolbar><BackButton link={`/questionnaires`} title="Annuler"/></TopToolbar>}>
      <SimpleForm required="/">
        <ReferenceInput
          source="UserId"
          reference="users"
          label="Administrateur" 
          validate={required()}        
          fullWidth
        >
            <SelectInput optionText="username" />
        </ReferenceInput>
        <TextInput autoComplete="off" label="Titre" source="title" fullWidth validate={required()} />
        <TextInput multiline autoComplete="off" label="Texte de participation" source="participationText" fullWidth validate={required()} />
        <TextInput multiline autoComplete="off" label="Texte de présentation" source="presentationText" fullWidth validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export default QuestionnaireCreate;

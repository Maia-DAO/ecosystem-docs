# I. Contribution Guidelines

Welcome to the Maia-DAO.github.io documentation contribution page! 

Our docs are the cornerstone for helping users and contributors understand how to work with our project. These guidelines aim to provide clear steps for contributing and improving our documentation so that we can ensure a welcoming and collaborative environment.

## A. Before You Start

Before diving into contributions, please familiarize yourself with the purpose and target audience of the Maia-DAO.github.io documentation. This will help you to make more impactful contributions that align with the goals of the project. We welcome various types of contributions, including but not limited to:

- Documentation improvements and updates
- Code enhancements and bug fixes
- Feature suggestions and implementations
- Translation and internationalization efforts

## B. Creating a Pull Request: Step by Step Guide

### 1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository

- Go to the GitHub page of the repository you'd like to contribute to.

   ```html
   https://github.com/Maia-DAO/ecosystem-docs/
   ```

- Click on the `Fork` button located at the top-right corner of the page. This will create a copy of the repository in your own GitHub account.

### 2. Clone Your Forked Repository

- After forking, navigate to your forked repository on GitHub.
- Click on the `Code` button and copy the URL provided under `Clone with HTTPS` or `Clone with SSH`.

- Open your terminal (command prompt or shell).
- Type `git clone`, then paste the copied URL

     ```bash
     git clone https://github.com/your-username/repository-name.git
     ```

- Press `Enter`. Your local clone will be created.

### 3. Create a New Branch

- Move into the repository's directory on your computer

     ```bash
     cd repository-name
     ```

- Now, create a new branch using the `git checkout` command

     ```bash
     git checkout -b your-new-branch-name
     ```

- Choose a name that relates to the contribution you intend to make.

### 4. Make Your Changes

- Open the files in your preferred text editor or IDE.
- Make your changes to the code or documentation. Ensure you follow the project's contribution guidelines.
- Once you've made your changes, save the files.

### 5. Commit Your Changes

- Stage your changes using `git add`:

     ```bash
     git add .
     ```

     Or add specific files using:

     ```bash
     git add path/to/your/file.extension
     ```

- Commit your changes with a message using `git commit`:

     ```bash
     git commit -m "Add a meaningful commit message here"
     ```

### 6. Push Your Changes to GitHub

- Push your branch to your GitHub repository:

     ```bash
     git push origin your-new-branch-name
     ```

### 7. Create a Pull Request

- Go to your repository on GitHub.
- You'll see a 'Compare & pull request' button. Click on it.
- Add a title and description for your pull request explaining your changes.
- If the repository has a template for pull requests, fill it out accordingly.
- Click on 'Create pull request'.

### 8. Follow Up

- Be responsive. If the maintainers ask for changes, try to make them promptly.
- If your PR hasn't received a response in a few days, feel free to leave a comment asking for a review.

---

By following these steps, you can create a detailed and informative pull request that maintainers can review and merge into their projects. Remember to always read through a project's contributing guidelines before making a contribution to ensure compliance with their standards and practices.

**Note:** For PRs related to minor fixes such as typos or grammar, a brief explanation is still appreciated.

## C. Setting up your Fork using Command Prompt

Here is the standard command sequence for setting up your repository fork:

```bash
git clone https://github.com/<your-username>/Maia-DAO.github.io.git
cd Maia-DAO.github.io
git remote add upstream https://github.com/Maia-DAO/Maia-DAO.github.io.git
git fetch upstream
git checkout main
git pull --rebase upstream main
git checkout -b feature/<your-feature-name>
```

Replace `<your-username>` with your GitHub username and `<your-feature-name>` with a name relevant to your contribution.

## D. Contribution Suggestions

We encourage a variety of contributions, here's how you can start:

### 1. Identify Confusing Content

   Any confusing terminology, explanations, or workflows can be flagged. Submit a PR with your improved version to clarify these sections.

### 2. Style Guide Adherence

   Ensure docs comply with the [Google Developer Documentation Style Guide](https://developers.google.com/style/). Focus on maintaining an [active voice](https://developers.google.com/style/voice) and using [first person](https://developers.google.com/style/person) where appropriate.

### 3. Guide Creation

   Examples of guides you might write include:

- Setting up a local test environment tailored to different testing suites.
- Fetching on-chain data relevant to Uniswap users and developers.
- Writing a "Hello World" guide for Solidity and Maia-DAO development.
- Steps for creating and deploying contracts on a testnet.

### 4. Iterate Based on Feedback from GPT

   Every contribution should ideally start as an "Issue" to foster discussion. After creating one, invite feedback by mentioning community leads, frequent contributors or even GPT with a prompt such as the one used to create this document.

```text
You are a star Technical DeFi Documentation Writer. Please give me your feedback on this contribution readme page for our project. Please give me your opinion such as pros/cons of the document and provide feedback on how to improve.
``````

## D. Questions and Communication

If during your contribution process you have any questions or need clarification, do not hesitate to raise an issue or seek out community members in our communication channels such as [Discord](https://discord.gg/maiadao) or [Telegram](https://t.me/maiadao).

We aim to review contributions within 5 business days. During busy periods, this may take longer. We appreciate your patience!

## E. Acknowledgements

We value each and every contribution to the project. Regular contributors will be recognized in our `Contributors Hall of Fame`, and exceptional contributions may be rewarded through our recognition programs.

## F. Conclusion

With these guidelines fleshed out, you're ready to contribute to the Maia-DAO.github.io documentation. Your efforts help us grow and improve, ensuring that everyone—from newcomers to veteran users—has access to top-notch resources.

Thanks for looking to give a little extra love to our docs and we look forward to your contributions !
